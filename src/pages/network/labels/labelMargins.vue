<template>
  <div>
    <p>The labels of box, circle, database, icon and text nodes may have different margin values.
      Top, right, bottom and left margins may be different for each node.</p>
    <p>Setting the margin value in the network's nodes property sets it as the default.</p>
    <p>Setting a the value to a number uses that number for the margins. If the value is an object, a different value for each margin will be set.</p>
    <p>Note that negative values appropriately push labels outside the node.</p>
    <vis-network :graph-data="graphData"
                 :options="options"
                 :style="containerStyle">
    </vis-network>
  </div>
</template>

<script >
export default {
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        // width: '600px',
        // height: '600px',
        // border: '1px solid lightgray'
      }
    }
  },
  mounted () {
    // create an array with nodes
    var nodes = [
      { id: 1, label: 'Default Value\n(5)', x: -150, y: -150 },
      { id: 2, label: 'Single Value\n(25)', margin: 20, x: 0, y: 0 },
      { id: 3,
        label: 'Different Values\n(10, 20, 40, 30)',
        margin: { top: 10, right: 20, bottom: 40, left: 30 },
        x: 120,
        y: 120
      },
      { id: 4,
        label: 'A Negative Value\n(10, 20, 40, -50)',
        margin:
          { top: 10, right: 20, bottom: 30, left: -20 },
        x: 300,
        y: -300
      }
    ]

    // create an array with edges
    var edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 3, to: 4}
    ]

    // create a network
    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {
      nodes: {
        shape: 'box'
      }
    }
  }
}

</script>

<style scoped>
  p {
    max-width:600px;
  }
</style>
