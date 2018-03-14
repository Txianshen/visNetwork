<template>
  <div>
    <p>
      This example demonstrates showing custom HTML in Nodes, by using an SVG image.
    </p>
    <p style="color: red;">
      WARNING: this is currently not supported by all browsers.
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
        // width: '100%',
        // height: '600px',
        // border: '1px solid lightgray',
        backgroundColor: '#eeeeee'
      }
    }
  },
  mounted () {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="390" height="65">' +
      '<rect x="0" y="0" width="100%" height="100%" fill="#7890A7" stroke-width="20" stroke="#ffffff" ></rect>' +
      '<foreignObject x="15" y="10" width="100%" height="100%">' +
      '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
      ' <em>I</em> am' +
      '<span style="color:white; text-shadow:0 0 20px #000000;">' +
      ' HTML in SVG!</span>' +
      '</div>' +
      '</foreignObject>' +
      '</svg>'

    var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)

    // Create a data table with nodes.
    var nodes = []

    // Create a data table with links.
    var edges = []

    nodes.push({id: 1, label: 'Get HTML', image: url, shape: 'image'})
    nodes.push({id: 2, label: 'Using SVG', image: url, shape: 'image'})
    edges.push({from: 1, to: 2, length: 300})

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {
      physics: {stabilization: false},
      edges: {smooth: false}
    }
  }
}
</script>

<style scoped>
</style>
