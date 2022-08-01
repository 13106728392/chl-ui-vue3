import element from './sub-menu.vue'
element.name = 'c-sub-menu'
element.install = function(app) {
  app.component(element.name, element)
}

export default element

