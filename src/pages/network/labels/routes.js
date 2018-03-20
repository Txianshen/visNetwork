import {
  Labels, Alignment, Background, ColorAndSize, Margins, MultiFont, Stroke, MultiLineText
} from '.'

let routes = [
  { path: 'alignment', name: 'Alignment', component: Alignment },
  { path: 'background', name: 'Background', component: Background },
  { path: 'colorAndSize', name: 'ColorAndSize', component: ColorAndSize },
  { path: 'margins', name: 'Margins', component: Margins },
  { path: 'multiFont', name: 'MultiFont', component: MultiFont },
  { path: 'stroke', name: 'Stroke', component: Stroke },
  { path: 'multilineText', name: 'MultilineText', component: MultiLineText }
]

export {Labels, routes as LabelsRoutes}
