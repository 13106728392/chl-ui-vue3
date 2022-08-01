import { h, render } from 'vue'

export function createComponent (component:any,props: null | undefined){
    const vnode = h(component,props)
    render(vnode,document.createElement('div'))
    return vnode.component
}
