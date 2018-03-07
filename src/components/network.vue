<template id>
  <div id="visNetwork"
       ref="mynetwork"
       style="width: 100%; border: 1px solid lightgrey"></div>
</template>

<script>
import vis from 'vis'
import _ from 'lodash'

const events = [
  // Events triggered by human interaction, selection, dragging etc.
  'click',
  'doubleClick',
  'oncontext',
  'hold',
  'release',
  'select',
  'selectNode',
  'selectEdge',
  'deselectNode',
  'deselectEdge',
  'dragStart',
  'dragging',
  'dragEnd',
  'hoverNode',
  'blurNode',
  'zoom',
  'showPopup',
  'hidePopup',
  // Events triggered the physics simulation. Can be used to trigger GUI updates.
  'startStabilizing',
  'stabilizationProgress',
  'stabilizationIterationsDone',
  'stabilized',
  // Event triggered by the canvas.
  'resize',
  // Events triggered by the rendering module. Can be used to draw custom elements on the canvas.
  'initRedraw',
  'beforeDrawing',
  'afterDrawing',
  // Event triggered by the view module.
  'animationFinished',
  // Event triggered by the configuration module.
  'configChange'
]

export default {
  name: 'vis-network',
  data () {
    return {
      localOptions: this.options
    }
  },
  props: {
    graphData: {
      type: Object,
      default: function () {
        return {
          nodes: [],
          edges: []
        }
      }
    },
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    // if `graphData` changes, the handler function will be called
    graphData: {
      deep: true,
      handler (newVal, oldVal) {
        // console.log('graph data:', this.graphData)
        this.nodes = new vis.DataSet(this.graphData.nodes)
        this.edges = new vis.DataSet(this.graphData.edges)
        this.network.setData({nodes: this.nodes, edges: this.edges})
      }
    },
    options: {
      deep: true,
      handler (newVal, oldVal) {
        // If passing this.options directly to setOptions as the param,
        // this.options might be modified by setOptions method,
        // that would trigger Vue.js infinite update loop
        this.localOptions = _.cloneDeep(this.options)
        this.network.setOptions(this.localOptions)
        // this.network.setOptions(this.options)
        console.log('in options watcher')
      }
    }
  },
  methods: {
    redraw () {
      this.network.redraw()
    },
    renew (data, options) {
      console.log('called renew()')
      this.network.destroy()
      this.network = new vis.Network(this.container, data, options)
    },
    onEvent (name) {
      return params => {
        this.$emit(name, params)
      }
      // var component = this
      // return function (params) {
      //   console.log('this object:', component)
      //   component.$emit(name, params)
      // }
    }
  },
  mounted () {
    this.container = this.$refs.mynetwork

    this.network = new vis.Network(this.container, this.graphData, this.localOptions)

    // add event listener
    for (const eventName of events) {
      this.network.on(eventName, this.onEvent(eventName))
    }
  },
  created () {
    this.network = null
  }
}
</script>
<style scoped>
</style>
