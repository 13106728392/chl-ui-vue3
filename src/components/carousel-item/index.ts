import element from './carousel-item.vue'
element.name = 'c-carousel-item'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
