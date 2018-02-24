<template>
  <div id="app">
    <el-container style="height: 1200px;">
      <el-header style="height: 150px; border: 1px solid #eee;">
        <img id="logo_img" src="./assets/visjs.png">
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
        <el-main width="400px">
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
    children: [{
      id: 5,
      label: 'Simple',
      path: 'Simple'
    }, {
      id: 6,
      label: 'Basic Usage',
      path: 'BasicUsage'
    }, {
      id: 7,
      label: 'physics'
    }, {
      id: 8,
      label: 'nodeStyles',
      children: [{
        id: 81,
        label: 'shapes',
        path: 'Shapes'
      }, {
        id: 82,
        label: 'images',
        path: 'Images'
      }, {
        id: 83,
        label: 'imagesWithBorders',
        path: 'ImagesWithBorders'
      }]
    }]
  }, {
    id: 2,
    label: 'TimeLine'
  }, {
    id: 3,
    label: 'Graph2d'
  }, {
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
