import element from "./message.vue";
import { createComponent } from "../../utils/component";

function messageCreate({
  content,
  type,
  duration,
  onClose,
}) {
  debugger
  const props = {
    content,
    type,
    duration,
    onClose,
  };
  // 创建message组件 el元素  props参数
  const component = createComponent(element, props);
  document.body.appendChild(component.vnode.el);
  return component.setupState.close.bind(this);
}

let oneKey: string | null = null;

function message({ type, content, duration,onClose }) {
  message({
    type,
    content,
    duration,
    onClose,
  });
}

["info", "error", "success", "warning", "loading"].forEach((type) => {
  oneKey || (oneKey = type);
  message = ({ type, content, duration, onClose }) =>
    messageCreate({
      type,
      content,
      duration,
      onClose,
    });
});

export default message;
