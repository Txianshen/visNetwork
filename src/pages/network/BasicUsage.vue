<template>
  <div style="">
    <p>
      Create a simple network with some nodes and edges.
    </p>
    <div>
      <button @click="changeData">change data</button>
      <button @click="toogleManipulate">toogle manipulation</button>
      <button @click="getNodesDataSet">print nodeDataset</button>
      <button @click="updateNode5Label">update node 5's label</button>
      <vis-network ref="network"
                   :graph-data="graphData"
                   :options="options"
                   :style="containerStyle"
                   @click="doClick">
      </vis-network>
    </div>
  </div>
</template>

<script type="text/javascript">
import {NODES, EDGES} from './datasources/WorldCup2014'

// create an array with nodes
var nodes = [
  {id: 1, label: 'Node 1', group: 1, color: 'red'},
  {id: 2, label: 'Node 2', group: 2, color: 'red'},
  {id: 3, label: 'Node 3', color: 'black', group: 3},
  {id: 4, label: 'Node 4', group: 4},
  {id: 5, label: 'Node 5', group: 5}
]

// create an array with edges
var edges = [
  {from: 1, to: 2},
  {from: 2, to: 3},
  {from: 3, to: 4},
  {from: 4, to: 5}
]
// create a network
// var container = document.getElementById('mynetwork')

export default ({
  name: 'basicUsage',
  data () {
    return {
      manipulationEnabled: false,
      graphData: {},
      options: {},
      containerStyle: {
        // height: '400px',
        // width: '100%',
        // border: '1px solid lightgrey'
      }
    }
  },
  created () {
    this.options = {
      nodes: {
        shape: 'dot',
        scaling: {
          min: 10,
          max: 30,
          label: {
            min: 8,
            max: 30,
            drawThreshold: 12,
            maxVisible: 20
          }
        },
        font: {
          size: 12,
          face: 'Tahoma'
        }
      },
      edges: {
        width: 0.15,
        color: {inherit: 'from'},
        smooth: {
          type: 'continuous'
        }
      },
      physics: false,
      interaction: {
        tooltipDelay: 200,
        hideEdgesOnDrag: true
      },
      groups: {
        2: {},
        3: {},
        4: {},
        5: {}
      }
    }
    this.graphData = {nodes: nodes, edges: edges} // Note: data is coming from ./datasources/WorldCup2014.js
    console.log(nodes, edges)
    console.log(NODES, EDGES)
  },
  methods: {
    doClick (params) {
      var nodesDataSet = this.$refs.network.getNodesDataSet()
      var allNodes = nodesDataSet.get({returnType: 'Array'})
      var selectedNode = params.nodes[0]
      console.log(selectedNode)
      for (let node of allNodes) {
        node.color = {
          background: 'rgba(100,100,100,0.5)'
        }
        // if (node.comment === undefined) {
        // node.comment = node.label
        node.label = ''
      }
      nodesDataSet.update(allNodes)
      // this.graphData = {nodes: allNodes, edges: edges}
      console.log(nodesDataSet)
    },
    changeData () {
      this.graphData = {
        nodes: [
          {id: 2, label: 'Node 1'},
          {id: 1, label: 'circle', shape: 'circle'}
        ],
        edges: [
          {from: 1, to: 2},
          {from: 2, to: 1}
        ]
      }
    },
    toogleManipulate () {
      this.manipulationEnabled = !this.manipulationEnabled
      if (this.manipulationEnabled) {
        this.options = {
          manipulation: {
            enabled: true,
            initiallyActive: true,
            addEdge: function (edgeData, callback) {
              callback(edgeData)
            }
          },
          nodes: {
            //   // physics: true
          }
        }
      } else {
        this.options = {
          manipulation: {enabled: false}
        }
      }
    },
    getNodesDataSet () {
      var nodeDataSet = this.$refs.network.getNodesDataSet()
      console.log(nodeDataSet.get({returnType: 'Object'}))
    },
    updateNode5Label () {
      var nodeDataSet = this.$refs.network.getNodesDataSet()
      nodeDataSet.update({id: 5, label: 'node5(updated)'})
    }
  }
})
</script>

<style scoped>
  /*div {*/
    /*width: 100%;*/
    /*height: 400px;*/
    /*!*max-height: 600px;*!*/
  /*}*/
</style>
