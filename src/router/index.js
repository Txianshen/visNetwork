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
import Groups from '../pages/network/nodeStyles/groups'
import Shadows from '../pages/network/nodeStyles/shadows'
import Colors from '../pages/network/nodeStyles/colors'
import CircularImages from '../pages/network/nodeStyles/circularImages'
import Icons from '../pages/network/nodeStyles/icons'
import CustomGroups from '../pages/network/nodeStyles/customGroups'
import HTMLInNodes from '../pages/network/nodeStyles/HTMLInNodes'
import ShapesWithDashedBorders from '../pages/network/nodeStyles/shapesWithDashedBorders'
import WidthHeight from '../pages/network/nodeStyles/widthHeight'

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
        children: [
          { path: 'shapes', name: 'Shapes', component: Shapes },
          { path: 'images', name: 'Images', component: Images },
          { path: 'imagesWithBorders', name: 'ImagesWithBorders', component: ImagesWithBorders },
          { path: 'groups', name: 'Groups', component: Groups },
          { path: 'shadows', name: 'Shadows', component: Shadows },
          { path: 'colors', name: 'Colors', component: Colors },
          { path: 'circularImages', name: 'CircularImages', component: CircularImages },
          { path: 'icons', name: 'Icons', component: Icons },
          { path: 'customGroups', name: 'CustomGroups', component: CustomGroups },
          { path: 'HTMLInNodes', name: 'HTMLInNodes', component: HTMLInNodes },
          { path: 'shapesWithDashedBorders', name: 'ShapesWithDashedBorders', component: ShapesWithDashedBorders },
          { path: 'widthHeight', name: 'WidthHeight', component: WidthHeight }
        ]
      }]
    }
  ]
})
