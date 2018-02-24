<template>
  <div>
    <h1>Network | Shapes</h1>
    <p>
      Nodes can have all sorts of shapes. Note the exception where the nodes with text inside and the text type's size are
      determined by the font size, not the node size.
    </p>
    <vis-network :graph-data="graphData" :options="options"></vis-network>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'shapes',
  data () {
    return {
      graphData: {},
      options: {}
    }
  },
  mounted () {
    var nodes = [
      {id: 1, label: 'circle', shape: 'circle'},
      {id: 2, label: 'ellipse', shape: 'ellipse'},
      {id: 3, label: 'database', shape: 'database'},
      {id: 4, label: 'box', shape: 'box'},
      {id: 5, label: 'diamond', shape: 'diamond'},
      {id: 6, label: 'dot', shape: 'dot'},
      {id: 7, label: 'square', shape: 'square'},
      {id: 8, label: 'triangle', shape: 'triangle'},
      {id: 9, label: 'triangleDown', shape: 'triangleDown'},
      {id: 10, label: 'text', shape: 'text'},
      {id: 11, label: 'star', shape: 'star'},
      {id: 21, font: {size: 30}, label: 'big circle', shape: 'circle'},
      {id: 22, font: {size: 30}, label: 'big ellipse', shape: 'ellipse'},
      {id: 23, font: {size: 30}, label: 'ellipse with a long label text', shape: 'ellipse'},
      {id: 24, font: {size: 30}, label: 'big database', shape: 'database'},
      {id: 25, font: {size: 30}, label: 'big box', shape: 'box'},
      {id: 26, font: {size: 30}, size: 40, label: 'big diamond', shape: 'diamond'},
      {id: 27, font: {size: 30}, size: 40, label: 'big dot', shape: 'dot'},
      {id: 28, font: {size: 30}, size: 40, label: 'big square', shape: 'square'},
      {id: 29, font: {size: 30}, size: 40, label: 'big triangle', shape: 'triangle'},
      {id: 30, font: {size: 30}, size: 40, label: 'big triangleDown', shape: 'triangleDown'},
      {id: 31, font: {size: 30}, label: 'big text', shape: 'text'},
      {id: 32, font: {size: 30}, size: 40, label: 'big star', shape: 'star'}
    ]

    var edges = []

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {physics: {barnesHut: {gravitationalConstant: -4000}}}
  },
  methods: {
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 400px;
    max-height: 600px;
  }
</style>
