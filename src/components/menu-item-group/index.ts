import element from './menu-item-group.vue'


element.name = 'c-menu-item-group'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
