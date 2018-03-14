<template>
  <div><p>
    The types of endpoints are: <code>'arrow' 'circle' 'bar'</code>.
    The default is <code>'arrow'</code>.
  </p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script>
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // width: '600px',
        // height: '400px',
        border: '1px solid lightgray'
      }
    }
  },
  created () {
    // create an array with nodes
    var nodes = [
      {id: 1, label: 'A'},
      {id: 2, label: 'B'},
      {id: 3, label: 'C'},
      {id: 4, label: 'D'}
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 2, arrows: 'to'},
      {
        from: 2,
        to: 3,
        arrows: {
          to: {
            enabled: true,
            type: 'circle'
          }
        }
      },
      {
        from: 3,
        to: 4,
        arrows: {
          to: {
            enabled: true,
            type: 'bar'
          }
        }
      }
    ]

    // create a network
    this.graphData = {
      nodes: nodes,
      edges: edges
    }

    this.options = {
      // Enable this to make the endpoints smaller/larger
      edges: {
        arrows: {
          to: {
            scaleFactor: 5
          }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
