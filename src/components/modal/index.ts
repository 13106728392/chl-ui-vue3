 import element from "./modal.vue";
import { createComponent } from "../../utils/component";


element.name = 'c-modal'
element.install = function (app) {
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

function modalCreate(option, type) {
    const props = {
        ...option,
        type,
        mouseClick,
        teleprot: false,
        modelValue: true,
    }
    // 创建modal组件 el元素  props参数
    const component = createComponent(element, props);
    document.body.appendChild(component.vnode.el);
    return component.setupState.close.bind(this);
}

let oneKey: string | null = null;


['info', 'error', 'success', 'warning', 'confirm'].forEach((type) => {
    oneKey || (oneKey = type);
    element[type] = (props) => {
        console.log(props)
        debugger
        modalCreate(props, type)
    }
});

export default element;
