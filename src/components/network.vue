<template id>
  <div id="test" ref="mynetwork" style="width: 100%;"></div>
</template>

<script>
import vis from 'vis'

export default {
  name: 'vis-network',
  data () {
    return {
      // graphData: this.initGraphData,
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
    // 如果 `graphData`属性发生改变，这个函数就会运行
    graphData: {
      deep: true,
      handler (newVal, oldVal) {
        console.log('graph data:', this.graphData)
        this.nodes = new vis.DataSet(this.graphData.nodes)
        this.edges = new vis.DataSet(this.graphData.edges)
        this.network.setData({nodes: this.nodes, edges: this.edges})
      }
    },
    options: {
      deep: true,
      handler (newVal, oldVal) {
        console.log('graph options:', this.options)
        var copyOfOptions = JSON.parse(JSON.stringify(this.options))
        console.log('graph options copy:', copyOfOptions)
        this.network.setOptions(copyOfOptions)
        // this.network.setOptions(this.options)
      }
    }
  },
  methods: {
    setData: function (newData) {
      this.network.setData(newData)
    },
    setOptions: function (newOptions) {
      this.network.setOptions(newOptions)
      console.log('newOptions:', newOptions)
    }
  },
  mounted () {
    this.container = this.$refs.mynetwork
    // this.container.style = 'height: 400px;'
    // var container = document.getElementById('mynetwork')
    this.nodes = new vis.DataSet(this.graphData.nodes)
    this.edges = new vis.DataSet(this.graphData.edges)
    var dataSet = {nodes: this.nodes, edges: this.edges}
    var copyOfOptions = JSON.parse(JSON.stringify(this.options))
    this.network = new vis.Network(this.container, dataSet, copyOfOptions)
    console.log('network object:', this.network)
  }
}
</script>
<style type="text/css" scoped>
div {
/*width: 100%;*/
/*height: 400px;*/
border: 1px solid lightgray;
}
</style>
