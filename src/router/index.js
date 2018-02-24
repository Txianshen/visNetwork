import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import NetworkIndex from '../pages/network/index'
import Simple from '../pages/network/Simple'
import BasicUsage from '../pages/network/BasicUsage'
import NodeStylesIndex from '../pages/network/nodeStyles/index'
import Shapes from '../pages/network/nodeStyles/shapes'
import Images from '../pages/network/nodeStyles/images'
import ImagesWithBorders from '../pages/network/nodeStyles/imagesWithBorders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/network',
      component: NetworkIndex,
      children: [{
        path: 'basic',
        name: 'BasicUsage',
        component: BasicUsage
      }, {
        path: 'simple',
        name: 'Simple',
        component: Simple
      }, {
        path: 'node-styles',
        component: NodeStylesIndex,
        children: [{
          path: 'shapes',
          name: 'Shapes',
          component: Shapes
        }, {
          path: 'images',
          name: 'Images',
          component: Images
        }, {
          path: 'imagesWithBorders',
          name: 'ImagesWithBorders',
          component: ImagesWithBorders
        }]
      }
      ]
    }
  ]
})
