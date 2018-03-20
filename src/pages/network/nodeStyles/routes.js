import {
  NodeStyles, Shapes, Images, ImagesWithBorders, Groups, Shadows, Colors, CircularImages,
  Icons, CustomGroups, HTMLInNodes, ShapesWithDashedBorders, WidthHeight
} from '.'

let routes = [
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

export {NodeStyles, routes as NodeStylesRoutes}
