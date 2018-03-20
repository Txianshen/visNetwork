import {EdgeStyles, Arrows, ArrowTypes, EdgeColors, Dashes, Smooth, SmoothWorldCup} from '.'
let routes = [
  { path: 'arrows', name: 'Arrows', component: Arrows },
  { path: 'arrowTypes', name: 'ArrowTypes', component: ArrowTypes },
  { path: 'edgeColors', name: 'EdgeColors', component: EdgeColors },
  { path: 'dashes', name: 'Dashes', component: Dashes },
  { path: 'smooth', name: 'Smooth', component: Smooth },
  { path: 'smoothWorldCup', name: 'SmoothWorldCup', component: SmoothWorldCup }
]
export {EdgeStyles, routes as EdgeStylesRoutes}
