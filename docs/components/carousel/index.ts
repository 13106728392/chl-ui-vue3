
import element from './carousel.vue'
element.name = 'c-carousel'
element.install = function(app) {
  app.component(element.name, element)
}

export default element

