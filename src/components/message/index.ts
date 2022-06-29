import element from './message.vue'
import { createComponent } from '../../utils/component'


function messageCreate(content:any, type:String, duration:Number) {
    const props = {
      content,
      type,
      duration,
    }
  
    const component = createComponent(element, props)
    document.body.appendChild(component.vnode.el)
    return component.setupState.close.bind(this)
  }
  
  let oneKey: string | null = null
  
  function message(content: any, duration: any) {
    message[oneKey](content, duration)
  }
  
  ;['info', 'error', 'success', 'warning', 'loading'].forEach((type) => {
    oneKey || (oneKey = type)
    message[type] = (content, duration) => messageCreate(content, type, duration)
  })
  
  export default message
  

  