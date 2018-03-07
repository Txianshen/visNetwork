<template>
  <vis-network :graph-data="graphData"
               :options="options"
               :style="containerStyle">
  </vis-network>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        width: '600px',
        height: '400px',
        border: '1px solid lightgray'
      }
    }
  },
  mounted () {
    // create some nodes
    var nodes = [
      {id: 1, label: 'Node in\nthe center', shape: 'text', font: {strokeWidth: 4}},
      {id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle'},
      {id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database'},
      {id: 4, label: 'This is text\non multiple lines', shape: 'box'},
      {id: 5, label: 'Little text', shape: 'ellipse'}
    ]

    // create some edges
    var edges = [
      {from: 1, to: 2, color: 'red', width: 3, length: 200}, // individual length definition is possible
      {from: 1, to: 3, dashes: true, width: 1, length: 200},
      {from: 1, to: 4, width: 1, length: 200, label: 'I\'m an edge!'},
      {from: 1, to: 5, arrows: 'to', width: 3, length: 200, label: 'arrows\nare cool'}
    ]

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {}
  }
}
</script>

<style scoped>
</style>
