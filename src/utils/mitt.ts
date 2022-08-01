
export default function () {
  const arr = new Map();
  const cached = {};

  // 绑定触发事件 set进去map
  function on(type, handler) {
    const handlers = arr.get(type);
    const added = handlers && handlers.push(handler);
    if (!added) {
      arr.set(type, [handler]);
    }

    if (cached[type] instanceof Array) {
      handler.apply(null, cached[type]);
    }
  }

  // 触发事件
  function emit(type, evt) {
    (arr.get(type) || []).slice().map((handler) => {
      handler(evt);
    });
    // 触发一次
    cached[type] = Array.prototype.slice.call(arguments, 1);
  }

  // 解除绑定事件
  function off(type, handler) {
    const handlers = arr.get(type);
    if (handlers) {
      handlers.splice(handlers.indexOf(handler), 1);
    }
  }

  return {
    on,
    emit,
    off
  };
}

