import {Events, InteractionEvents, PhysicsEvents, RenderEvents} from '.'

let routes = [
  {path: 'interactionEvents', name: 'InteractionEvents', component: InteractionEvents},
  {path: 'physicsEvents', name: 'PhysicsEvents', component: PhysicsEvents},
  {path: 'renderEvents', name: 'RenderEvents', component: RenderEvents}
]

export {Events, routes as EventsRoutes}
