<template>
  <div>
    <p>
      Nodes can be all kinds of colors. This example shows all possible ways of defining colors. If you supply an object,
      the undefined fields will assume the default colors.
      When supplying a hex or rgb format color, it will be parsed and variations will be created for highlight and hover.
      Edges with inheritColor take the border colors.
    </p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script type="text/javascript">
export default {
  // create an array with nodes
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
  mounted () {
    var nodes = [
      {id: 1, label: 'html color', color: {}},
      {id: 2, label: 'rgb color', color: 'rgb(255,168,7)'},
      {id: 3, label: 'hex color', color: '#61c3ee'},
      {id: 4, label: 'rgba color', color: 'rgba(97,195,238, 0.5)'},
      {id: 5, label: 'colorObject', color: {background: 'pink', border: 'purple'}},
      {
        id: 6,
        label: 'colorObject + highlight',
        color: {background: '#F03967', border: '#713E7F', highlight: {background: 'red', border: 'black'}}
      },
      {
        id: 7,
        label: 'colorObject + highlight + hover',
        color: {
          background: 'cyan',
          border: 'blue',
          highlight: {background: 'red', border: 'blue'},
          hover: {background: 'white', border: 'red'}
        }
      }
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 2, to: 6},
      {from: 4, to: 7}
    ]

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {
      nodes: {borderWidth: 2},
      interaction: {hover: true}
    }
  }
}
</script>
<style scoped>
  p {
    max-width:700px;
  }
</style>
