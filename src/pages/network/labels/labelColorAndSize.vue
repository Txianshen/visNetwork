<template>
  <div>
    <p>The style of the edges can be fully customized.</p>
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
      {id: 1, label: 'Node 1', font: '12px arial red'},
      {id: 2, label: 'Node 2', font: {size: 12, color: 'lime', face: 'arial'}},
      {id: 3, label: 'Node 3', font: '18px verdana blue'},
      {id: 4, label: 'Node 4', font: {size: 12, color: 'red', face: 'sans', background: 'white'}},
      {id: 5, label: 'Node 5', font: {size: 15, color: 'red', face: 'courier', strokeWidth: 3, strokeColor: '#ffffff'}}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]

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
