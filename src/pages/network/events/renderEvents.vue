<template>
  <div>
    <p>
      You can draw on the canvas using normal HTML5 canvas functions. The before drawing will be behind the network, the
      after drawing will be in front of the network.
    </p>

    <vis-network ref="network"
         :graphData="graphData"
         :options="options"
         @initRedraw="initRedraw"
         @beforeDrawing="beforeDrawing"
         @afterDrawing="afterDrawing">
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
    initRedraw () {
      // do something like move some custom elements?
    },
    beforeDrawing (ctx) {
      var nodeId = 1
      var nodePosition = this.$refs.network.getPositions([nodeId])
      ctx.strokeStyle = '#A6D5F7'
      ctx.fillStyle = '#294475'
      ctx.circle(nodePosition[nodeId].x, nodePosition[nodeId].y, 50)
      ctx.fill()
      ctx.stroke()
    },
    afterDrawing (ctx) {
      var nodeId = 1
      var nodePosition = this.$refs.network.getPositions([nodeId])
      ctx.strokeStyle = '#294475'
      ctx.lineWidth = 4
      ctx.fillStyle = '#A6D5F7'
      ctx.circle(nodePosition[nodeId].x, nodePosition[nodeId].y, 20)
      ctx.fill()
      ctx.stroke()
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
p {
  max-width:800px;
}
</style>
