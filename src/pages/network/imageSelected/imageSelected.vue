<template>
  <div>
    <button @click="changeOptions">redraw</button>
    <vis-network ref="network" :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script>
const DIR = './static/img/imageSelected/'

export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // width: '600px',
        // height: '400px',
        // border: '1px solid lightgray'
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      // create an array with nodes
      var nodes = [
        {
          id: 1,
          shape: 'image',
          size: 20,
          label: 'No select image',
          image: DIR + './unselected.svg'
        },
        {
          id: 2,
          shape: 'image',
          size: 20,
          label: 'Select image broken',
          image: {
            unselected: DIR + './unselected.svg',
            selected: DIR + './BROKEN_LINK/selected.svg'
          }
        },
        {
          id: 3,
          shape: 'image',
          size: 20,
          label: 'Select works!',
          image: {
            unselected: DIR + './unselected.svg',
            selected: DIR + './selected.svg'
          },
          shapeProperties: {
            borderDashes: [15, 5],
            interpolation: false
          }
        }
      ]

      // create an array with edges
      var edges = [
        {from: 1, to: 2},
        {from: 2, to: 3}
      ]

      // provide the data in the vis format
      this.graphData = {
        nodes: nodes,
        edges: edges
      }
    },
    changeOptions () {
      var options = {
        layout: {
          randomSeed: 5
        },
        nodes: {
          brokenImage: DIR + './broken-image.png'
        }
      }
      this.$refs.network.renew({}, options)
      this.initData()
    }
  }
}
</script>

<style scoped>
</style>
