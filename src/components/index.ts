import { App } from "vue";
import Button from "./button";
import Icon from "./icon";
import Message from "./message";
import Switch from "./Switch";
import Input from "./input";
import Modal from "./modal";
import Col from "./col";
import Row from "./row";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Cmenu from "./menu";
import CmenuItem from "./menu-item";
import CmenuItemGroup from "./menu-item-group";
import subMenu from "./sub-menu";
import "../theme/index.less";

const components = [
  Button,
  Icon,
  Switch,
  Input,
  Col,
  Row,
  Carousel,
  CarouselItem,
  Cmenu,
  CmenuItem,
  CmenuItemGroup,
  subMenu,
];

const install = (app: App) => {
  // 挂载全局访问属方法获取
  app.config.globalProperties.$message = Message;
  app.config.globalProperties.$modal = Modal;
  components.map((item) => {
    app.component(item.name, item);
  });
};

export default {
  install,
  ...components,
};
