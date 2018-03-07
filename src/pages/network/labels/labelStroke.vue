<template>
  <div>
    <p>
      The stroke of labels is fully can have a width and color. Edgelabels by default have a white stroke for
    clarity.
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
        width: '600px',
        height: '600px',
        border: '1px solid lightgray',
        background: '#d1d1d1'
      }
    }
  },
  mounted () {
    // create an array with nodes
    var nodes = [
      {id: 1, label: 'Node 1', font: {strokeWidth: 3, strokeColor: 'white'}},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 2, label: 'edgeLabel', font: {strokeWidth: 2, strokeColor: '#00ff00'}},
      {from: 1, to: 3, label: 'edgeLabel'},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]

    // create a network
    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {
      nodes: {
        shape: 'dot',
        size: 10
      }
    }
  }
}

</script>

<style scoped>
p {
  max-width:600px;
}
</style>
