import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import NetworkIndex from '../pages/network/network'
import Simple from '../pages/network/Simple'
import BasicUsage from '../pages/network/BasicUsage'
import {EdgeStyles, EdgeStylesRoutes} from '../pages/network/edgeStyles/routes'
import {Events, EventsRoutes} from '../pages/network/events/routes'
import {ExampleApplications, ExampleApplicationsRoutes} from '../pages/network/exampleApplications/routes'
import {ImageSelected} from '../pages/network/imageSelected/routes'
import {Labels, LabelsRoutes} from '../pages/network/labels/routes'
import {Layout, LayoutRoutes} from '../pages/network/layout/routes'
import {NodeStyles, NodeStylesRoutes} from '../pages/network/nodeStyles/routes'
import {Physics, PhysicsRoutes} from '../pages/network/physics/routes'

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
      { path: 'edgeStyles',
        name: 'EdgeStyles',
        component: EdgeStyles,
        children: EdgeStylesRoutes
      },
      { path: 'events',
        name: 'Events',
        component: Events,
        children: EventsRoutes
      },
      {
        path: 'physics',
        component: Physics,
        children: PhysicsRoutes
      },
      {
        path: 'exampleApplications',
        component: ExampleApplications,
        children: ExampleApplicationsRoutes
      },
      {
        path: 'imageSelected',
        name: 'ImageSelected',
        component: ImageSelected
      },
      {
        path: 'labels',
        component: Labels,
        children: LabelsRoutes
      },
      {
        path: 'layout',
        component: Layout,
        children: LayoutRoutes
      },
      {
        path: 'node-styles',
        component: NodeStyles,
        children: NodeStylesRoutes
      }]
    }
  ]
})
