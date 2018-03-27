<!-- saved from url=(0044)http://kenedict.com/networks/worldcup14/vis/ , thanks Andre!-->
<template>
  <div>
    <h2>Performance - World Cup Network</h2>

    <div style="width:700px; font-size:14px;">
      This example shows the performance of vis with a larger network. The edges in
      particular (~9200) are very computationally intensive
      to draw. Drag and hold the graph to see the performance difference if the
      edges are hidden.
      <br/><br/>
      We use the following physics configuration: <br/>
      <code>{barnesHut: {gravitationalConstant: -80000, springConstant: 0.001,
        springLength: 200}}</code>
      <br/><br/>
    </div>

    <vis-network :graph-data="graphData"
                 :options="options">
    </vis-network>
  </div>
</template>

<script type="text/javascript">
import {NODES, EDGES} from '../datasources/WorldCup2014'

export default {
  data () {
    return {
      graphData: {},
      options: {}
    }
  },
  created () {
    // remove positoins
    for (let i = 0; i < NODES.length; i++) {
      delete NODES[i].x
      delete NODES[i].y
    }

    this.graphData = {
      nodes: NODES,
      edges: EDGES
    }
    this.options = {
      nodes: {
        shape: 'dot',
        scaling: {
          min: 10,
          max: 30
        },
        font: {
          size: 12,
          face: 'Tahoma'
        }
      },
      edges: {
        width: 0.15,
        color: {inherit: 'from'},
        smooth: {
          type: 'continuous'
        }
      },
      physics: {
        stabilization: false,
        barnesHut: {
          gravitationalConstant: -80000,
          springConstant: 0.001,
          springLength: 200
        }
      },
      interaction: {
        tooltipDelay: 200,
        hideEdgesOnDrag: true
      }
    }
  }
}
</script>

<style type="text/css">
</style>
