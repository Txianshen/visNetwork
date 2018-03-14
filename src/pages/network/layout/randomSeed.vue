<template>
  <div>
    <p>
      Create a simple network with some nodes and edges but with a fixed seed. This means the layout will be the same
      every time the nodes
      are settled.
    </p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle" >
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
      {id: 5, label: 'Node 5'}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]

    this.graphData = {
      nodes: nodes,
      edges: edges
    }

    this.options = {layout: {randomSeed: 2}}
  }
}
</script>

<style scoped>
p {
  max-width:600px;
}
</style>
