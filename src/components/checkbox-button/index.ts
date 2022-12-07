import element from '../checkbox/src/checkbox-button.vue'


element.name = 'c-checkbox-button'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
