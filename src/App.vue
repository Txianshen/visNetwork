<template>
  <div id="app">
    <!--<div id="config"></div>-->
    <el-container style="height: 1200px;">
      <el-header style="text-align: center; border: 1px solid #eee;">
        <!--<img id="logo_img" src="./assets/visjs.png">-->
        <h1>Vis.js Examples with Vue.js</h1>
      </el-header>
      <el-container>
        <el-aside width="200px" style="border: 1px solid #eee; padding: 20px 0px;">
          <el-input
            placeholder="输入关键字"
            v-model="filterText">
          </el-input>
          <el-tree
            class="filter-tree"
            :data="menus"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree2"
            @node-click="handleClick">
          </el-tree>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <!--<el-footer></el-footer>-->
    </el-container>
  </div>
</template>

<script>

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
      filterText: '',
      menus: tree,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    filterNode () {
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 0px;
  }

  #logo_img {
    display: block;
    width: 100%;
    max-height: 150px;
    /*margin: 0 auto;*/
  }

  #config {
    float: left;
    /*display: inline;*/
    width: 100px;
    height: 200px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }

  .el-main {
    /*width: 400px;*/
  }

</style>
