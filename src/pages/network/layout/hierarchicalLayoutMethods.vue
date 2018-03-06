<template>
  <div><h2>Hierarchical layout difference</h2>
    <div style="width:700px; font-size:14px; text-align: justify;">
      This example shows a the effect of the different hierarchical layout methods. Hubsize is based on the amount of
      edges connected to a node.
      The node with the most connections (the largest hub) is drawn at the top of the tree. The direction method is
      based on the direction of the edges.
      Try switching between the methods with the dropdown box below.
    </div>
    Layout method:
    <select @change="onChange">
      <option value="hubsize">hubsize</option>
      <option value="directed">directed</option>
    </select><br/>
    <br/>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle" >
    </vis-network>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      layoutMethod: 'directed',
      graphData: {},
      options: {},
      containerStyle: {
        width: '800px',
        height: '500px',
        border: '1px solid lightgray'
      }
    }
  },
  methods: {
    onChange (event) {
      console.log(event)
      this.layoutMethod = event.target.value
      this.layout()
    },
    layout () {
      this.options = {
        layout: {
          hierarchical: {
            sortMethod: this.layoutMethod
          }
        },
        edges: {
          smooth: true,
          arrows: {to: true}
        }
      }
    }
  },
  mounted () {
    var nodes = []
    var edges = []

    for (let i = 0; i < 19; i++) {
      nodes.push({id: i, label: String(i)})
    }
    edges.push({from: 0, to: 1})
    edges.push({from: 0, to: 6})
    edges.push({from: 0, to: 13})
    edges.push({from: 0, to: 11})
    edges.push({from: 1, to: 2})
    edges.push({from: 2, to: 3})
    edges.push({from: 2, to: 4})
    edges.push({from: 3, to: 5})
    edges.push({from: 1, to: 10})
    edges.push({from: 1, to: 7})
    edges.push({from: 2, to: 8})
    edges.push({from: 2, to: 9})
    edges.push({from: 3, to: 14})
    edges.push({from: 1, to: 12})
    edges.push({from: 16, to: 15})
    edges.push({from: 15, to: 17})
    edges.push({from: 18, to: 17})

    this.graphData = {
      nodes: nodes,
      edges: edges
    }

    this.layout()
  }
}
</script>

<style scoped>
</style>
