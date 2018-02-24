<template>
  <div>
    <vis-network :graph-data=graphData :options="options"></vis-network>
  </div>
</template>

<script>

export default {
  name: 'simple',
  data () {
    // create an array with nodes
    return {
      graphData: {
        nodes: [
          {id: 1, label: 'Node 1'},
          {id: 2, label: 'Node 2'},
          {id: 3, label: 'Node 3'},
          {id: 4, label: 'Node 4'},
          {id: 5, label: 'Node 5'}
        ],
        edges: [
          {from: 1, to: 3},
          {from: 1, to: 2},
          {from: 2, to: 4},
          {from: 2, to: 5},
          {from: 3, to: 3}
        ]
      },
      options: {}
    }
  },
  mounted () {
    console.log('in simple.vue')
    setTimeout(function () {
      this.graphData = {
        nodes: [
          {id: 1, label: 'Node 11'},
          {id: 2, label: 'Node 12'},
          {id: 3, label: 'Node 13'},
          {id: 4, label: 'Node 14'},
          {id: 5, label: 'Node 15'}
        ],
        edges: [
          {from: 1, to: 3},
          {from: 1, to: 2},
          {from: 2, to: 4},
          {from: 2, to: 5},
          {from: 3, to: 3}
        ]
      }
      console.log(this.graphData)
    }, 1000)
  }
}
</script>

<style scoped>
  /*div {*/
    /*width: 100%;*/
    /*height: 400px;*/
    /*max-height: 600px;*/
  /*}*/
</style>
