 import element from "./modal.vue";
import { createComponent } from "../../utils/component";


element.install = function(app) {
    app.component(element.name, element)
  }


let mouseClick
const getClickPosition = (e) => {
    mouseClick = {
        x: e.clientX,
        y: e.clientY,
    }
    setTimeout(() => (mouseClick = null), 100)
}
document.addEventListener('click', getClickPosition, true)

function modalCreate(option) {
    const props = {
        ...option,
        mouseClick,
        teleprot: false,
        modelValue: true,
    }

    // 创建modal组件 el元素  props参数
    document.body.style.overflow = 'hidden'
    const component = createComponent(element, props)
    document.body.appendChild(component.vnode.el)
}

let oneKey: string | null = null;

function modal(props) {
    modal(props);
  }
  

['info', 'error', 'success', 'warning', 'confirm'].forEach((type) => {
    oneKey || (oneKey = type);
    modal = (props) => {
        modalCreate({type,...props})
    }
});

 export default modal;
