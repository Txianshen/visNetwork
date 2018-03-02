<template>
  <div>
    <h2>Hierarchical Layout - Scale-Free-Network</h2>

    <div style="width:700px; font-size:14px; text-align: justify;">
      This example shows the randomly generated <b>scale-free-network</b> set of nodes and connected edges from example
      2.
      In this example, hierarchical layout has been enabled and the vertical levels are determined automatically.
    </div>
    <br/>

    <div>
      <label for="nodeCount">Number of nodes:</label>
      <input id="nodeCount" type="text" v-model="nodeCount" style="width: 50px;">
      <input type="button" value="New Network(non-hierarchical)" @click="initNetwork">
    </div>
    <p>
      <input type="button" id="btn-UD" value="Up-Down" @click="changeDirection">
      <input type="button" id="btn-DU" value="Down-Up" @click="changeDirection">
      <input type="button" id="btn-LR" value="Left-Right" @click="changeDirection">
      <input type="button" id="btn-RL" value="Right-Left" @click="changeDirection">
    </p>

    <vis-network ref="network"
                 :graph-data="graphData"
                 :options="options"
                 :style="containerStyle"
                 v-on:select="onSelect">
    </vis-network>
    <p id="selection">Selection: {{selection}}</p>
  </div>
</template>

<script type="text/javascript">
import {getScaleFreeNetwork} from '../exampleUtil'

export default {
  data () {
    return {
      selection: '',
      nodeCount: 25,
      directionInput: 'UD',
      graphData: {},
      options: {},
      containerStyle: {
        width: '100%',
        height: '600px',
        border: '1px solid lightgray',
        margin: '5px'
      }
    }
  },
  mounted () {
    // randomly create some nodes and edges
    this.graphData = getScaleFreeNetwork(this.nodeCount)
  },
  methods: {
    destroy () {
      this.$refs.network.destory()
    },
    initNetwork () {
      this.graphData = getScaleFreeNetwork(this.nodeCount)
      this.options = {
        layout: {
          hierarchical: {
            enabled: false
          }
        }
      }
    },
    draw () {
      // this.destroy()

      this.options = {
        layout: {
          hierarchical: {
            direction: this.directionInput
          }
        }
      }
    },
    changeDirection (event) {
      var directionMap = {
        'Up-Down': 'UD',
        'Down-Up': 'DU',
        'Left-Right': 'LR',
        'Right-Left': 'RL'
      }
      this.directionInput = directionMap[event.target.value]
      this.draw()
    },
    onSelect (event) {
      this.selection = event.nodes
      console.log(event)
    }
  }
}
</script>

<style type="text/css">
</style>
