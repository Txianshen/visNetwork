import {
  Layout, RandomSeed, HierarchicalLayout, UserDefined, BigUserDefined, LayoutMethods, WithoutPhysics
} from '.'

let routes = [
  {path: 'randomSeed', name: 'RandomSeed', component: RandomSeed},
  {path: 'hierarchicalLayout', name: 'HierarchicalLayout', component: HierarchicalLayout},
  {path: 'userDefined', name: 'UserDefined', component: UserDefined},
  {path: 'bigUserDefined', name: 'BigUserDefined', component: BigUserDefined},
  {path: 'layoutMethods', name: 'LayoutMethods', component: LayoutMethods},
  {path: 'withoutPhysics', name: 'WithoutPhysics', component: WithoutPhysics}
]

export {Layout, routes as LayoutRoutes}
