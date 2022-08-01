import element from './menu.vue'

element.name = 'c-menu'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
