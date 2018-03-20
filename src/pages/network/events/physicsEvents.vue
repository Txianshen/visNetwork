<template>
  <div>
    <p>
      Create a simple network with some nodes and edges.
    </p>

    <vis-network ref="network"
         :graphData="graphData"
         :options="options"
         @startStabilizing="startStabilizing"
         @stabilizationProgress="stabilizationProgress"
         @stabilizationIterationsDone="stabilizationIterationsDone"
         @stabilized="stabilized">
    </vis-network>
    <pre id="eventSpan"></pre>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      graphData: {},
      options: {}
    }
  },
  methods: {
    startStabilizing (params) {
      document.getElementById('eventSpan').innerHTML = '<h3>Starting Stabilization</h3>'
      console.log('started')
    },
    stabilizationProgress (params) {
      document.getElementById('eventSpan').innerHTML = '<h3>Stabilization progress</h3>' + JSON.stringify(params, null, 4)
      console.log('progress:', params)
    },
    stabilizationIterationsDone (params) {
      document.getElementById('eventSpan').innerHTML = '<h3>Stabilization iterations complete</h3>'
      console.log('finished stabilization interations')
    },
    stabilized (params) {
      document.getElementById('eventSpan').innerHTML = '<h3>Stabilized!</h3>' + JSON.stringify(params, null, 4)
      console.log('stabilized!', params)
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

    // create a network
    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {}
  }
}
</script>

<style type="text/css">
</style>
