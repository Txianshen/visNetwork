<template>
  <div>
    <h2>Playing with Physics</h2>
    <!--<div style="font-size:14px; text-align: justify;">-->
    <p>
      Every dataset is different. Nodes can have different sizes based on content, interconnectivity can be high or
      low etc. Because of this, the network configurator can be used
      to explore which settings may be good for him or her. This is ment to be used during the development phase when
      you are implementing vis.js. Once you have found
      settings you are happy with, you can supply them to network using the documented physics options.
    </p>
    <br/>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>

    <p id="selection"></p></div>
</template>

<script>
import {getScaleFreeNetwork} from '../exampleUtil'

export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // float: 'left',
        width: '600px',
        height: '600px',
        border: '1px solid lightgray',
        margin: '5px'
      }
    }
  },
  mounted () {
    // randomly create some nodes and edges
    this.graphData = getScaleFreeNetwork(60)

    this.options = {
      physics: {
        stabilization: false
      }
      // configure: {
      //   filter: function (option, path) {
      //     if (path.indexOf('physics') !== -1) {
      //       return true
      //     }
      //     if (path.indexOf('smooth') !== -1 || option === 'smooth') {
      //       return true
      //     }
      //     return false
      //   },
      //   container: document.getElementById('config')
      // }
    }
  }
}
</script>

<style scoped>
  p {
    max-width:700px;
  }
</style>
