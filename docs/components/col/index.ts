import element from './col.vue'
element.name = 'c-col'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
