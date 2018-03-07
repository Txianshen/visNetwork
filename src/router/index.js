import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import NetworkIndex from '../pages/network/index'
import Simple from '../pages/network/Simple'
import BasicUsage from '../pages/network/BasicUsage'
import {
  EdgeStyles, Arrows, ArrowTypes, EdgeColors, Dashes, Smooth, SmoothWorldCup
} from '../pages/network/edgeStyles'
import {ImageSelected} from '../pages/network/imageSelected'
import {
  Labels, Alignment, Background, ColorAndSize, Margins, MultiFont, Stroke, MultiLineText
} from '../pages/network/labels'
import {
  Layout, RandomSeed, HierarchicalLayout, UserDefined, BigUserDefined, LayoutMethods, WithoutPhysics
} from '../pages/network/layout'
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
import {Physics, PhysicsConfiguration} from '../pages/network/physics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/network',
      component: NetworkIndex,
      children: [{
        path: 'basic',
        name: 'BasicUsage',
        component: BasicUsage
      },
      {
        path: 'simple',
        name: 'Simple',
        component: Simple
      },
      {
        path: 'edgeStyles',
        name: 'EdgeStyles',
        component: EdgeStyles,
        children: [
          {
            path: 'arrows',
            name: 'Arrows',
            component: Arrows
          },
          {
            path: 'arrowTypes',
            name: 'ArrowTypes',
            component: ArrowTypes
          },
          {
            path: 'edgeColors',
            name: 'EdgeColors',
            component: EdgeColors
          },
          {
            path: 'dashes',
            name: 'Dashes',
            component: Dashes
          },
          {
            path: 'smooth',
            name: 'Smooth',
            component: Smooth
          },
          {
            path: 'smoothWorldCup',
            name: 'SmoothWorldCup',
            component: SmoothWorldCup
          }
        ]
      },
      {
        path: 'physics',
        component: Physics,
        children: [
          {
            path: 'configuration',
            name: 'PhysicsConfiguration',
            component: PhysicsConfiguration
          }
        ]
      },
      {
        path: 'imageSelected',
        name: 'ImageSelected',
        component: ImageSelected
      },
      {
        path: 'labels',
        component: Labels,
        children: [
          {
            path: 'alignment',
            name: 'Alignment',
            component: Alignment
          },
          {
            path: 'background',
            name: 'Background',
            component: Background
          },
          {
            path: 'colorAndSize',
            name: 'ColorAndSize',
            component: ColorAndSize
          },
          {
            path: 'margins',
            name: 'Margins',
            component: Margins
          },
          {
            path: 'multiFont',
            name: 'MultiFont',
            component: MultiFont
          },
          {
            path: 'stroke',
            name: 'Stroke',
            component: Stroke
          },
          {
            path: 'multilineText',
            name: 'MultilineText',
            component: MultiLineText
          }
        ]
      },
      {
        path: 'layout',
        component: Layout,
        children: [
          {
            path: 'randomSeed',
            name: 'RandomSeed',
            component: RandomSeed
          },
          {
            path: 'hierarchicalLayout',
            name: 'HierarchicalLayout',
            component: HierarchicalLayout
          },
          {
            path: 'userDefined',
            name: 'UserDefined',
            component: UserDefined
          },
          {
            path: 'bigUserDefined',
            name: 'BigUserDefined',
            component: BigUserDefined
          },
          {
            path: 'layoutMethods',
            name: 'LayoutMethods',
            component: LayoutMethods
          },
          {
            path: 'withoutPhysics',
            name: 'WithoutPhysics',
            component: WithoutPhysics
          }
        ]
      },
      {
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
