import { DefineComponent, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue'
import element from './switch.vue'

element.name = 'c-switch'
element.install = function(app: { component: (arg0: string, arg1: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>) => void }) {
  app.component(element.name, element)
}

export default element