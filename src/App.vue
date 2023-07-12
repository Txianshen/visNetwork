<template>
  <div id="app">
    <!--<div id="config"></div>-->
    <div id="header" style="">
      <!--<img id="logo_img" src="./assets/visjs.png">-->

      <h1>Vis.js Examples with Vue.js test</h1>
    </div>
    <div id="aside" :style="asideStyle">
      <div v-if="collapsed" @click="toggleCollapse" style="height: 100%;">
        <i class="el-icon-caret-right"></i>
      </div>
      <div v-else>
        <i class="el-icon-caret-left" @click="toggleCollapse" style="height: 3vh"></i>
        <div id="nav" style="position:absolute;right: 2px;background-color:blue;"></div>
        <el-input placeholder="输入关键字" v-model="filterText"></el-input>
        <div style="overflow: hidden">
          <el-tree
            ref="tree2"
            style="margin-right: -20px; margin-top: 1vh; margin-bottom: -20px; height: 90vh;overflow: scroll"
            class="filter-tree"
            :data="menus"
            :props="defaultProps"
            :default-expand-all="true"
            :filter-node-method="filterNode"
            @node-click="handleClick">
          </el-tree>
        </div>
      </div>
    </div>
    <router-view></router-view>
      <!--<el-footer></el-footer>-->
  </div>
</template>

<script>
import BUS from './eventBus'

const tree = [
  {
    id: 1,
    label: 'Network',
    icon: 'el-icon-message',
    children: [
      {
        id: 11,
        label: 'Simple',
        path: 'Simple'
      },
      {
        id: 31,
        label: 'Basic Usage',
        path: 'BasicUsage'
      },
      {
        id: 40,
        label: 'edgeStyles',
        children: [
          { id: 41, label: 'arrows', path: 'Arrows' },
          { id: 42, label: 'arrowTypes', path: 'ArrowTypes' },
          { id: 43, label: 'edgeColors', path: 'EdgeColors' },
          { id: 44, label: 'dashes', path: 'Dashes' },
          { id: 45, label: 'smooth', path: 'Smooth' },
          { id: 46, label: 'smoothWorldCup', path: 'SmoothWorldCup' }
        ]
      },
      {
        id: 47,
        label: 'events',
        children: [
          {id: 48, label: 'interaction', path: 'InteractionEvents'},
          {id: 49, label: 'physics', path: 'PhysicsEvents'},
          {id: 50, label: 'render', path: 'RenderEvents'}
        ]
      },
      {
        id: 51,
        label: 'physics',
        children: [
          {
            id: 52,
            label: 'configuration',
            path: 'PhysicsConfiguration'
          }
        ]
      },
      {
        id: 60,
        label: 'exampleApplications',
        children: [
          {id: 61, label: 'disassembler', path: 'DisassemblerExample'},
          {id: 62, label: 'lesMiserables', path: 'LesMiserables'},
          {id: 63, label: 'loadingBar', path: 'LoadingBar'},
          {id: 64, label: 'neighbourhoodHighlight', path: 'NeighbourhoodHighlight'},
          {id: 65, label: 'nodeLegend', path: 'NodeLegend'},
          {id: 66, label: 'worldCupPerformance', path: 'WorldCupPerformance'}
        ]
      },
      {
        id: 71,
        label: 'nodeStyles',
        children: [
          { id: 72, label: 'shapes', path: 'Shapes' },
          { id: 73, label: 'images', path: 'Images' },
          { id: 74, label: 'imagesWithBorders', path: 'ImagesWithBorders' },
          { id: 75, label: 'circularImages', path: 'CircularImages' },
          { id: 76, label: 'groups', path: 'Groups' },
          { id: 77, label: 'shadows', path: 'Shadows' },
          { id: 78, label: 'colors', path: 'Colors' },
          { id: 79, label: 'icons', path: 'Icons' },
          { id: 80, label: 'customGroups', path: 'CustomGroups' },
          { id: 81, label: 'HTMLInNodes', path: 'HTMLInNodes' },
          { id: 82, label: 'shapesWithDashedBorders', path: 'ShapesWithDashedBorders' },
          { id: 83, label: 'widthHeight', path: 'WidthHeight' }
        ]
      },
      {
        id: 91,
        label: 'layout',
        children: [
          { id: 93, label: 'fixedRandomSeed', path: 'RandomSeed' },
          { id: 93, label: 'hierarchicalLayout', path: 'HierarchicalLayout' },
          { id: 94, label: 'userDefined', path: 'UserDefined' },
          { id: 95, label: 'bigUserDefined', path: 'BigUserDefined' },
          { id: 96, label: 'layoutMethods', path: 'LayoutMethods' },
          { id: 97, label: 'withoutPhysics', path: 'WithoutPhysics' }
        ]
      },
      {
        id: 98,
        label: 'imageSelected',
        children: [
          { id: 99, label: 'imageSelected', path: 'ImageSelected' }
        ]
      },
      {
        id: 101,
        label: 'labels',
        children: [
          { id: 102, label: 'alignment', path: 'Alignment' },
          { id: 103, label: 'background', path: 'Background' },
          { id: 104, label: 'colorAndSize', path: 'ColorAndSize' },
          { id: 105, label: 'margins', path: 'Margins' },
          { id: 106, label: 'multiFont', path: 'MultiFont' },
          { id: 107, label: 'stroke', path: 'Stroke' },
          { id: 108, label: 'multilineText', path: 'MultilineText' }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'TimeLine'
  },
  {
    id: 3,
    label: 'Graph2d'
  },
  {
    id: 4,
    label: 'Graph3d'
  }
]
export default {
  name: 'App',
  data () {
    return {
      collapsed: true,
      filterText: '',
      menus: tree,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText: {
      deep: false,
      handler (val) {
        this.$refs.tree2.filter(val)
      }
    }
  },
  computed: {
    asideStyle () {
      var width = ''
      var height = ''
      if (this.collapsed) {
        width = '20px'
      } else {
        width = '200px'
        height = '100vh'
      }
      return {
        position: 'fixed',
        left: '0px',
        top: '0px',
        zIndex: 1,
        width: width,
        height: height,
        border: '1px solid #aaaaaa',
        backgroundColor: 'lightgray',
        paddingLeft: '5px',
        paddingRight: '5px'
      }
    }
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    toggleCollapse () {
      this.collapsed = !this.collapsed
      if (!this.collapsed) {
        this.$nextTick(() => {
          this.$refs.tree2.filter(this.filterText)
          BUS.$emit('aside-collapse', parseInt(this.asideWidth))
        })
      }
    },
    filterNode (value, data) {
      if (!value) {
        return true
      }
      return data.label.indexOf(value) !== -1
    },
    handleClick (data) {
      console.log(data)
      if (data.hasOwnProperty('path')) {
        this.$router.push({name: data.path})
      }
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 0px;
    /*height: 1000px;*/
  }

  #header {
    /*position: fixed;*/
    /*left: 0px;*/
    /*top: 0px;*/
    /*width: 100%;*/
    text-align: center;
    /*height: 60px;*/
    /*border: 1px solid #eee;*/
  }

  #aside {
    /*position: fixed;*/
    /*left: 0px;*/
    /*top: 10px;*/
    /*width: 200px;*/
    /*height: 600px;*/
    /*border: 1px solid #eee;*/
    /*background: #00aa00;*/
  }

  #config {
    /*float: left;*/
    background: #555555;
    /*display: inline;*/
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }

</style>
