<template>
  <div>
    <p>
      Icons can be used for nodes as well. This example shows Icons from fontAwesome and Ionicons but it should work
      with similar packages as well.
      It uses unicode and css to define the icons.<br><br> <b>Remember! Unicode in javascript is done like this: \uf274
      for the unicode f274.</b>
      <br> If a node is shown as a rectangle, it means the css is not loaded (or not yet loaded). A redraw will fix
      that.
    </p>

    <h2>
      <i class="fa fa-flag"></i> Use FontAwesome-icons for nodes</h2>
      <vis-network :graph-data="dataFA"
                   :options="optionsFA"
                   :style="containerStyle">
      </vis-network>
    <h2>
      <i class="ion ion-ionic"></i> Use Ionicons-icons for nodes</h2>
      <vis-network :graph-data="dataIO"
                   :options="optionsIO"
                   :style="containerStyle">
      </vis-network>
  </div>
</template>

  <style>
    p {
      max-width:700px;
    }
  </style>

<script language="JavaScript">
export default {
  data () {
    return {
      dataFA: {},
      dataIO: {},
      optionsFA: {},
      optionsIO: {},
      containerStyle: {
        height: '300px',
        width: '700px',
        border: '1px solid lightgrey'
      }
    }
  },
  mounted () {
    /*
         * Example for FontAwesome
         */
    this.optionsFA = {
      nodes: {
        font: {
          size: 14
        }
      },
      groups: {
        usergroups: {
          shape: 'icon',
          icon: {
            face: 'FontAwesome',
            code: '\uf0c0',
            size: 50,
            color: '#57169a'
          }
        },
        users: {
          shape: 'icon',
          icon: {
            face: 'FontAwesome',
            code: '\uf007',
            size: 50,
            color: '#aa00ff'
          }
        }
      }
    }

    // create an array with nodes
    var nodesFA = [{
      id: 1,
      label: 'User 1',
      group: 'users'
    }, {
      id: 2,
      label: 'User 2',
      group: 'users'
    }, {
      id: 3,
      label: 'Usergroup 1',
      group: 'usergroups'
    }, {
      id: 4,
      label: 'Usergroup 2',
      group: 'usergroups'
    }, {
      id: 5,
      label: 'Organisation 1',
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf1ad',
        size: 50,
        color: '#f0a30a'
      }
    }]

    // create an array with edges
    var edges = [{
      from: 1,
      to: 3
    }, {
      from: 1,
      to: 4
    }, {
      from: 2,
      to: 4
    }, {
      from: 3,
      to: 5
    }, {
      from: 4,
      to: 5
    }]

    this.dataFA = {
      nodes: nodesFA,
      edges: edges
    }

    /*
         * Example for Ionicons
         */
    this.optionsIO = {
      groups: {
        usergroups: {
          shape: 'icon',
          icon: {
            face: 'Ionicons',
            code: '\uf47c',
            size: 50,
            color: '#57169a'
          }
        },
        users: {
          shape: 'icon',
          icon: {
            face: 'Ionicons',
            code: '\uf47e',
            size: 50,
            color: '#aa00ff'
          }
        }
      }
    }

    // create an array with nodes
    var nodesIO = [{
      id: 1,
      label: 'User 1',
      group: 'users'
    }, {
      id: 2,
      label: 'User 2',
      group: 'users'
    }, {
      id: 3,
      label: 'Usergroup 1',
      group: 'usergroups'
    }, {
      id: 4,
      label: 'Usergroup 2',
      group: 'usergroups'
    }, {
      id: 5,
      label: 'Organisation 1',
      shape: 'icon',
      icon: {
        face: 'Ionicons',
        code: '\uf276',
        size: 50,
        color: '#f0a30a'
      }
    }]

    this.dataIO = {
      nodes: nodesIO,
      edges: edges
    }
  }
}
</script>
