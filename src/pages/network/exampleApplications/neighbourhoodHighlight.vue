<template>
  <div><h2>Dynamic Data - Neighbourhood Highlight</h2>
    <div style="width:800px; font-size:14px;">
      This example shows the power of the DataSet. Once a node is clicked, all nodes are greyed out except for the first
      and second order connected nodes.
      In this example we show how you can determine the order of connection per node as well as applying individual
      styling to the nodes based on whether or not
      they are connected to the selected node. The code doing the highlighting only takes about 1ms, the rest of the
      time is the redrawing of the network (9200 edges..).
      <br/><br/>
    </div>

    <vis-network ref="network"
                 :graph-data="graphData"
                 :options="options"
                 @click="neighbourhoodHighlight">
    </vis-network>
  </div>
</template>

<script>
import {NODES, EDGES} from '../datasources/WorldCup2014'

export default {
  data () {
    return {
      graphData: {},
      options: {}
    }
  },
  methods: {
    neighbourhoodHighlight (params) {
      // get a JSON object
      var nodesDataSet = this.$refs.network.getNodesDataSet()
      var allNodes = nodesDataSet.get({returnType: 'Object'})

      // if something is selected:
      if (params.nodes.length > 0) {
        this.highlightActive = true
        var i, j
        var selectedNode = params.nodes[0]
        var degrees = 1

        // mark all nodes as hard to read.
        for (var nodeId in allNodes) {
          allNodes[nodeId].color = 'rgba(100,100,100,0.5)'
          if (allNodes[nodeId].hiddenLabel === undefined) {
            allNodes[nodeId].hiddenLabel = allNodes[nodeId].label
            allNodes[nodeId].label = undefined
          }
        }
        var connectedNodes = this.$refs.network.getConnectedNodes(selectedNode)
        var allConnectedNodes = []

        // get the second degree nodes
        for (i = 1; i < degrees; i++) {
          for (j = 0; j < connectedNodes.length; j++) {
            allConnectedNodes = allConnectedNodes.concat(
              this.$refs.network.getConnectedNodes(connectedNodes[j]))
          }
        }

        // all second degree nodes get a different color and their label back
        for (i = 0; i < allConnectedNodes.length; i++) {
          allNodes[allConnectedNodes[i]].color = 'rgba(150,150,150,0.75)'
          if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
            allNodes[allConnectedNodes[i]].label = allNodes[allConnectedNodes[i]].hiddenLabel
            allNodes[allConnectedNodes[i]].hiddenLabel = undefined
          }
        }

        // all first degree nodes get their own color and their label back
        for (i = 0; i < connectedNodes.length; i++) {
          allNodes[connectedNodes[i]].color = undefined
          if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
            allNodes[connectedNodes[i]].label = allNodes[connectedNodes[i]].hiddenLabel
            allNodes[connectedNodes[i]].hiddenLabel = undefined
          }
        }

        // the main node gets its own color and its label back.
        allNodes[selectedNode].color = undefined
        if (allNodes[selectedNode].hiddenLabel !== undefined) {
          allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel
          allNodes[selectedNode].hiddenLabel = undefined
        }
      } else if (this.highlightActive === true) {
        // reset all nodes
        for (let nodeId in allNodes) {
          allNodes[nodeId].color = undefined
          if (allNodes[nodeId].hiddenLabel !== undefined) {
            allNodes[nodeId].label = allNodes[nodeId].hiddenLabel
            allNodes[nodeId].hiddenLabel = undefined
          }
        }
        this.highlightActive = false
      }

      // transform the object into an array
      var updateArray = []
      for (nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) {
          updateArray.push(allNodes[nodeId])
        }
      }
      nodesDataSet.update(updateArray)
    }
  },
  created () {
    this.highlightActive = false

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
      }
    }
    this.graphData = {nodes: NODES, edges: EDGES} // Note: data is coming from ./datasources/WorldCup2014.js
  }
}
</script>

<style type="text/css">
  #mynetwork {
    width: 800px;
    height: 800px;
    border: 1px solid lightgray;
  }
</style>
