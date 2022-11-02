import element from './menu-item.vue'

element.name = 'c-menu-item'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
