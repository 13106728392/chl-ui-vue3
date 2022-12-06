import element from './tooltip.js'

element.name ='c-tooltip'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
