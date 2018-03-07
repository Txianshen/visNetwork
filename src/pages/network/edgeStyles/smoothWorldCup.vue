<template>
  <!-- saved from url=(0044)http://kenedict.com/networks/worldcup14/vis/ , thanks Andre!-->
  <div><h2>Static smooth curves - World Cup Network</h2>
    <div style="width:700px; font-size:14px;">
      The static smooth curves are based only on the positions of the connected
      nodes.
      There are multiple ways to determine the way this curve is drawn.
      This example shows the effect of the different types on a large network.
      <br/> <br/>
      Also shown in this example is the inheritColor option of the edges as well as
      the roundness factor. Because the physics has been disabled, the dynamic smooth curves do not work here.
    </div>

    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
    <div ref="optionsContainer"></div>
  </div>
</template>

<script>
import {NODES, EDGES} from '../datasources/WorldCup2014'

export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        width: '800px',
        height: '800px',
        border: '1px solid lightgray'
      }
    }
  },
  mounted () {
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
        color: {inherit: true},
        width: 0.15,
        smooth: {
          type: 'continuous'
        }
      },
      interaction: {
        hideEdgesOnDrag: true,
        tooltipDelay: 200
      },
      configure: {
        filter: function (option, path) {
          if (option === 'inherit') {
            return true
          }
          if (option === 'type' && path.indexOf('smooth') !== -1) {
            return true
          }
          if (option === 'roundness') {
            return true
          }
          if (option === 'hideEdgesOnDrag') {
            return true
          }
          if (option === 'hideNodesOnDrag') {
            return true
          }
          return false
        },
        container: this.$refs.optionsContainer,
        showButton: false
      },
      physics: false
    }

    this.graphData = {nodes: NODES, edges: EDGES}
    // Note: data is coming from ./data/WorldCup2014.js
  }
}
</script>

<style scoped>
#optionsContainer {
  height:280px;
}
</style>
