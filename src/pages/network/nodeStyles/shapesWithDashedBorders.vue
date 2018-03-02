<template>
  <div>
    <p>
      Nodes can have all sorts of shapes. Note the exception where the nodes with text inside and the text type's size
      are determined by the font size, not the node size.
    </p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        width: '100%',
        height: '600px',
        border: '1px solid lightgray'
      }
    }
  },
  mounted () {
    var nodes = [
      {id: 1, font: {size: 30}, label: 'circle', shape: 'circle', shapeProperties: {borderDashes: [5, 5]}},
      {id: 2, font: {size: 30}, label: 'ellipse', shape: 'ellipse', shapeProperties: {borderDashes: [5, 5]}},
      {id: 3, font: {size: 30}, label: 'database', shape: 'database', shapeProperties: {borderDashes: [5, 5]}},
      {id: 4, font: {size: 30}, label: 'box', shape: 'box', shapeProperties: {borderDashes: [5, 5]}},
      {id: 5, font: {size: 30}, size: 40, label: 'diamond', shape: 'diamond', shapeProperties: {borderDashes: [5, 5]}},
      {id: 6, font: {size: 30}, size: 40, label: 'dot', shape: 'dot', shapeProperties: {borderDashes: [5, 5]}},
      {id: 7, font: {size: 30}, size: 40, label: 'square', shape: 'square', shapeProperties: {borderDashes: [5, 5]}},
      {
        id: 8,
        font: {size: 30},
        size: 40,
        label: 'triangle',
        shape: 'triangle',
        shapeProperties: {borderDashes: [5, 5]}
      },
      {
        id: 9,
        font: {size: 30},
        size: 40,
        label: 'triangleDown',
        shape: 'triangleDown',
        shapeProperties: {borderDashes: [5, 5]}
      },
      {id: 10, font: {size: 30}, size: 40, label: 'star', shape: 'star', shapeProperties: {borderDashes: true}},
      {
        id: 11,
        font: {size: 30},
        size: 40,
        label: 'circularImage',
        shape: 'circularImage',
        image: './static/img/indonesia/4.png',
        shapeProperties: {borderDashes: [15, 5]}
      }
    ]

    var edges = []

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {physics: {barnesHut: {gravitationalConstant: -4000}}}
  }
}
</script>

<style scoped>
</style>
