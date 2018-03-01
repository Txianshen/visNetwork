<template>
  <div>
    <p>
      Display nodes as images.
    </p>
    <vis-network :graph-data="graphData"
                 :options="options" :style="containerStyle"></vis-network>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'imagesWithBorders',
  data () {
    return {
      graphData: {},
      options: {},
      containerStyle: {
        width: '800px',
        height: '800px',
        border: '1px solid lightgray',
        backgroundColor: '#333333'
      }
    }
  },
  mounted () {
    // create people.
    // value corresponds with the age of the person
    const DIR = './static/img/indonesia/'
    var nodes = [
      {id: 1, shape: 'image', image: DIR + '1.png'},
      {id: 2, shape: 'image', image: DIR + '2.png'},
      {id: 3, shape: 'image', image: DIR + '3.png'},
      {id: 4, shape: 'image', image: DIR + '4.png', label: 'pictures by this guy!'},
      {id: 5, shape: 'image', image: DIR + '5.png'},
      {id: 6, shape: 'image', image: DIR + '6.png'},
      {id: 7, shape: 'image', image: DIR + '7.png'},
      {id: 8, shape: 'image', image: DIR + '8.png'},
      {id: 9, shape: 'image', image: DIR + '9.png'},
      {id: 10, shape: 'image', image: DIR + '10.png'},
      {id: 11, shape: 'image', image: DIR + '11.png'},
      {id: 12, shape: 'image', image: DIR + '12.png'},
      {id: 13, shape: 'image', image: DIR + '13.png'},
      {id: 14, shape: 'image', image: DIR + '14.png'},
      // {
      //   id: 15,
      //   shape: 'image',
      //   image: DIR + 'missing.png',
      //   brokenImage: DIR + 'missingBrokenImage.png',
      //   label: 'when images\nfail\nto load'
      // },
      // {
      //   id: 16,
      //   shape: 'image',
      //   image: DIR + 'anotherMissing.png',
      //   brokenImage: DIR + '9.png',
      //   label: 'fallback image in action'
      // },
      {id: 17, shape: 'image', image: DIR + 'logo.png'}
    ]

    // create connections between people
    // value corresponds with the amount of contact between two people
    var edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 2, to: 4},
      {from: 4, to: 5},
      {from: 4, to: 10},
      {from: 4, to: 6},
      {from: 6, to: 7},
      {from: 7, to: 8},
      {from: 8, to: 9},
      {from: 8, to: 10},
      {from: 10, to: 11},
      {from: 11, to: 12},
      {from: 12, to: 13},
      {from: 13, to: 14},
      {from: 9, to: 16}
    ]

    // create a network
    this.graphData = {
      nodes: nodes,
      edges: edges
    }
    this.options = {
      nodes: {
        borderWidth: 4,
        size: 30,
        color: {
          border: '#406897',
          background: '#6AAFFF'
        },
        font: {color: '#eeeeee'},
        shapeProperties: {
          useBorderWithImage: true,
          useImageSize: false
        }
      },
      edges: {
        color: 'lightgray'
      }
    }
  }
}
</script>

<style type="text/css">
  body {
    font: 10pt arial
  }
</style>
