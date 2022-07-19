import { App } from 'vue'
import Button from './button'
import Icon from './icon'
import Message from './message'
import Switch from './Switch'
import Input from './input'
import Modal from './modal'
import '../theme/index.less'

const components = [Button,Icon,Switch,Message,Input,Modal]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ... components
}