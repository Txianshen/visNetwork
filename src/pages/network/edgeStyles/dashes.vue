<template>
  <div><p>
    Playing with dashes.
  </p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script>
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // width: '600px',
        // height: '400px',
        // border: '1px solid lightgray'
      }
    }
  },
  created () {
    // create an array with nodes
    var nodes = [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'},
      {id: 6, label: 'Node 6'}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 3, dashes: true},
      {from: 1, to: 2, dashes: [5, 5]},
      {from: 2, to: 4, dashes: [5, 5, 3, 3]},
      {from: 2, to: 5, dashes: [2, 2, 10, 10]},
      {from: 2, to: 6, dashes: false}
    ]

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {}
  }
}
</script>
