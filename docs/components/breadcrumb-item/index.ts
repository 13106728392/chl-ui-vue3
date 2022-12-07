import mBreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';


mBreadcrumbItem.name = 'c-breadcrumb-item'
mBreadcrumbItem.install = (Vue) => {
  Vue.component(mBreadcrumbItem.name,mBreadcrumbItem)
}

export default mBreadcrumbItem;