<template>
  <div>
    <p>
      Use VisJS to diagram the Control-Flow-Graph (CFG) of a function from
      a program you wish to analyze.
    </p>
    <vis-network :graph-data="graphData"
                 :options="options">
    </vis-network>
  </div>
</template>

<script>
import * as Graph from './disassemblerExampleDataAndOptions'

export default {
  data () {
    return {
      graphData: {},
      options: {}
    }
  },
  created () {
    this.graphData = {'nodes': Graph.nodes, 'edges': Graph.edges}
    this.options = Graph.options
  }
}
</script>

<style>
</style>
