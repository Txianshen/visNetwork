import {
  ExampleApplications,
  DisassemblerExample,
  LesMiserables,
  LoadingBar,
  NeighbourhoodHighlight,
  NodeLegend,
  WorldCupPerformance
} from '.'

let routes = [
  {path: 'disassemblerExample', name: 'DisassemblerExample', component: DisassemblerExample},
  {path: 'lesMiserables', name: 'LesMiserables', component: LesMiserables},
  {path: 'loadingBar', name: 'LoadingBar', component: LoadingBar},
  {path: 'neighbourhoodHighlight', name: 'NeighbourhoodHighlight', component: NeighbourhoodHighlight},
  {path: 'nodeLegend', name: 'NodeLegend', component: NodeLegend},
  {path: 'worldCupPerformance', name: 'WorldCupPerformance', component: WorldCupPerformance}
]

export {ExampleApplications, routes as ExampleApplicationsRoutes}
