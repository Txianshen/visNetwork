<template>
  <div><h2>Hierarchical Layout - User-defined</h2>

    <div style="width:700px; font-size:14px; text-align: justify;">
      This example shows a user-defined hierarchical layout. If the user defines levels for nodes but does not do so for
      all nodes, an alert will show up and hierarchical layout will be disabled. Either all or none can be defined.
      If the smooth curves appear to be inverted, the direction of the edge is not in the same direction as the network.
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
    <p id="selection">Selection: {{selection}}</p></div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // width: '800px',
        // height: '400px',
        // border: '1px solid lightgray',
        margin: '5px'
      },
      directionInput: 'UD',
      selection: ''
    }
  },
  methods: {
    destory () {
      this.$refs.network.destory()
    },

    initNetwork () {
      var nodes = []
      var edges = []
      for (let i = 0; i < 15; i++) {
        nodes.push({id: i, label: String(i)})
      }
      edges.push({from: 0, to: 1})
      edges.push({from: 0, to: 6})
      edges.push({from: 0, to: 13})
      edges.push({from: 0, to: 11})
      edges.push({from: 1, to: 2})
      edges.push({from: 2, to: 3})
      edges.push({from: 2, to: 4})
      edges.push({from: 3, to: 5})
      edges.push({from: 1, to: 10})
      edges.push({from: 1, to: 7})
      edges.push({from: 2, to: 8})
      edges.push({from: 2, to: 9})
      edges.push({from: 3, to: 14})
      edges.push({from: 1, to: 12})
      nodes[0]['level'] = 0
      nodes[1]['level'] = 1
      nodes[2]['level'] = 3
      nodes[3]['level'] = 4
      nodes[4]['level'] = 4
      nodes[5]['level'] = 5
      nodes[6]['level'] = 1
      nodes[7]['level'] = 2
      nodes[8]['level'] = 4
      nodes[9]['level'] = 4
      nodes[10]['level'] = 2
      nodes[11]['level'] = 1
      nodes[12]['level'] = 2
      nodes[13]['level'] = 1
      nodes[14]['level'] = 5

      this.graphData = {
        nodes: nodes,
        edges: edges
      }
      this.layout()
    },

    layout () {
      this.options = {
        edges: {
          smooth: {
            type: 'cubicBezier',
            forceDirection: (
              this.directionInput === 'UD' ||
              this.directionInput === 'DU') ? 'vertical' : 'horizontal',
            roundness: 0.4
          }
        },
        layout: {
          hierarchical: {
            direction: this.directionInput
          }
        }
        // physics: false
      }
      // this.options = {
      //   edges: {
      //     smooth: {
      //       type: 'cubicBezier',
      //       forceDirection: 'vertical',
      //       roundness: 0.4
      //     }
      //   },
      //   layout: {
      //     hierarchical: {
      //       direction: 'UD'
      //     }
      //   }
      //   // physics: false
      // }
    },
    changeDirection (event) {
      var directionMap = {
        'Up-Down': 'UD',
        'Down-Up': 'DU',
        'Left-Right': 'LR',
        'Right-Left': 'RL'
      }
      this.directionInput = directionMap[event.target.value]
      this.layout()
    },
    onSelect (event) {
      this.selection = event.nodes
    }
  },
  created () {
    this.initNetwork()
  }
}
</script>

<style scoped>
</style>
