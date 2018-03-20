<template>
  <div><p>
    Create a simple network with some nodes and edges. Some of the events are logged in the console in improve
    readability.
  </p>

    <vis-network ref="network"
         :graphData="graphData"
         :options="options"
         @click="click"
         @doubleClick="doubleClick"
         @oncontext="oncontext"
         @dragStart="dragStart"
         @dragging="dragging"
         @dragEnd="dragEnd"
         @zoom="zoom"
         @showPopup="showPopup"
         @select="select"
         @selectNode="selectNode"
         @selectEdge="selectEdge"
         @deselectNode="deselectNode"
         @deselectEdge="deselectEdge"
         @hoverNode="hoverNode"
         @hoverEdge="hoverEdge"
         @blurNode="blurNode"
         @blurEdge="blurEdge">
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
    click (params) {
      params.event = '[original event]'
      document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4)
      console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM))
    },
    doubleClick (params) {
      params.event = '[original event]'
      document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4)
    },
    oncontext (params) {
      params.event = '[original event]'
      document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4)
    },
    dragStart (params) {
      // There's no point in displaying this event on screen, it gets immediately overwritten
      params.event = '[original event]'
      console.log('dragStart Event:', params)
      console.log('dragStart event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM))
    },
    dragging (params) {
      params.event = '[original event]'
      document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4)
    },
    dragEnd (params) {
      params.event = '[original event]'
      document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4)
      console.log('dragEnd Event:', params)
      console.log('dragEnd event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM))
    },
    zoom (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4)
    },
    showPopup (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4)
    },
    hidePopup () {
      console.log('hidePopup Event')
    },
    select (params) {
      console.log('select Event:', params)
    },
    selectNode (params) {
      console.log('selectNode Event:', params)
    },
    selectEdge (params) {
      console.log('selectEdge Event:', params)
    },
    deselectNode (params) {
      console.log('deselectNode Event:', params)
    },
    deselectEdge (params) {
      console.log('deselectEdge Event:', params)
    },
    hoverNode (params) {
      console.log('hoverNode Event:', params)
    },
    hoverEdge (params) {
      console.log('hoverEdge Event:', params)
    },
    blurNode (params) {
      console.log('blurNode Event:', params)
    },
    blurEdge (params) {
      console.log('blurEdge Event:', params)
    }
  },
  created () {
    // create an array with nodes
    var nodes = [
      {id: 1, label: 'Node 1', title: 'I have a popup!'},
      {id: 2, label: 'Node 2', title: 'I have a popup!'},
      {id: 3, label: 'Node 3', title: 'I have a popup!'},
      {id: 4, label: 'Node 4', title: 'I have a popup!'},
      {id: 5, label: 'Node 5', title: 'I have a popup!'}
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

    this.options = {
      // interaction: {hover: true},
      manipulation: {
        enabled: true
      }
    }
  }
}
</script>

<style type="text/css">
</style>
