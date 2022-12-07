import element from '../checkbox/src/checkbox-group.vue'


element.name = 'c-checkbox-group'
element.install = function(app) {
  app.component(element.name, element)
}

export default element
