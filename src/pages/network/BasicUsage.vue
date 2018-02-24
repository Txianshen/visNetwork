<template>
  <div style="">
    <p>
      Create a simple network with some nodes and edges.
    </p>
    <div>
      <button @click="changeData">change data</button>
      <button @click="toogleManipulate">toogle manipulation</button>
      <vis-network :graph-data="graphData" :options="options"></vis-network>
    </div>
  </div>
</template>

<script type="text/javascript">
// create an array with nodes
var nodes = [
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
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
var data = {
  nodes: nodes,
  edges: edges
}

export default ({
  name: 'basicUsage',
  data () {
    return {
      manipulationEnabled: false,
      graphData: {},
      options: {}
    }
  },
  mounted () {
    this.graphData = data
  },
  methods: {
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
