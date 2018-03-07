<template>
  <div><p>Labels can have any color background.</p>
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
        width: '600px',
        height: '600px',
        border: '1px solid lightgray'
      }
    }
  },
  mounted () {
    // create an array with nodes
    var nodes = [
      {id: 1, label: 'Node 1', font: {background: 'red'}},
      {id: 2, label: 'Node 2', font: {background: 'white'}},
      {id: 3, label: 'Node 3', font: {background: 'cyan'}},
      {id: 4, label: 'Node 4', font: {background: 'lime'}},
      {id: 5, label: 'Node 5', font: {background: 'pink'}}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 2, label: 'label1', font: {background: '#ff0000'}},
      {from: 1, to: 3, label: 'label2', font: {background: 'yellow'}},
      {from: 2, to: 4, label: 'label3', font: {background: 'lime'}},
      {from: 2, to: 5, label: 'label3', font: {background: 'pink'}}
    ]

    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {nodes: {font: {strokeWidth: 0}}, edges: {font: {strokeWidth: 0}}}
  }
}
</script>

<style scoped>
  p {
    max-width:600px;
  }
</style>
