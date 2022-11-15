<template>
  <div class="wrapper">
    <div class="sidebar-nav">
      <div class="sidebar-menu">
        <dl>
          <dd class="navItem">
            <router-link to="/" active-class="active-class">
              介绍</router-link>
          </dd>
        </dl>

        <div v-for="(menu, i) in nav" class="menu" :key="i">
          <dl v-if="menu.child">
            <dt># {{ menu.title }}</dt>
            <dd class="navItem" v-for="(submenu, k) in menu.child" :key="i + k">
              <router-link :to="submenu.done == 'true' ? submenu.routePath : ''"
                :class="submenu.done == 'true' ? 'isclick' : 'noclick'"
                :active-class="submenu.done == 'true' ? 'active-class' : ''">{{
                    submenu.title
                }}</router-link>
            </dd>
          </dl>
          <router-link v-else :to="menu.routePath">{{
              menu.title
          }}</router-link>
        </div>
      </div>
    </div>
    <showView />
  </div>
</template>

<script>
import routes from './router/data'
import showView from './views/View'
import { ref, onMounted, onBeforeMount, nextTick ,reactive} from 'vue'
import pkg from '../package.json'
import emitter from "./utils/bus";
export default {
  components: {
    showView,
  },

  setup() {
    const state = reactive({
      contentList: [],
      topList: []
    })

    const mainScroll = ref(null)

// state.contentList = menuList[0]['list'][0]?.content;
    const nav = useNav()

    const calcH2TopList = () => {
      let h2List = document.querySelectorAll('h2');
      let arr = [];
      h2List.forEach(item => {
        arr.push(item.offsetTop);
      })
      state.topList = arr;
    }


    onMounted(() => {
      nextTick(() => {
        calcH2TopList();
        // mainScroll.value.addEventListener("scroll", thorrle(handleScroll, 200));
      })
      emitter.on('previewChange', (res) => {
        setTimeout(() => {
          calcH2TopList();
        }, 500);
      })
    })

    onBeforeMount(() => {
      emitter.off('previewChange');
    });



    return {
      nav,
      version: pkg.version,
    }
  },
}


const useNav = () => {
  // 按照tag分类 重排数组
  const menu = []
  const submenu = []

  routes.data.forEach((item) => {
    if (item.tag) {
      let index = null
      submenu.forEach((i, k) => {
        if (i.title === item.tag) {
          index = k
        }
      })

      if (index !== null) {
        submenu[index].child.push(item)
      } else {
        submenu.push({
          title: item.tag,
          child: [item],
        })
      }
    } else {
      menu.push(item)
    }
  })
  return menu.concat(submenu)
}
</script>

<style lang="less">
.sidebar-nav {
  overflow: auto;
  width: 200px;
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  transition: background-color .3s ease;

  dt {
    color: #98a6ad;
    padding: 8px 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #98a6ad;

  }

  dd {
    width: 100%;
    margin: 0;
    border-radius: 6px;

    .noclick {
      text-decoration: line-through
    }

    a {
      font-size: 14px;
      display: block;
      box-sizing: border-box;
      width: 100%;
      text-decoration: none;
      color: #000;
      padding: 8px 10px;
      text-align: left;
      margin: 4px 0;
    }

    transition: background-color .3s ease;

    &:hover {
      background-color: rgb(#000 0.1);
    }
  }

}


.active-class {
  background-color: rgb(#000 0.1);
}

.content-page {
  // width: 100%;
  position: absolute;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  padding: 35px;
  padding-right: 160px;
  right: 0;
  left: 200px;
  top: 0;
  bottom: 0;
}

.color1 {
  background-color: #F56C6C;
}
.color2 {
  background-color: #67C23A;
}
.color3 {
  background-color: #409EFF;
}
.color4 {
  background-color: #909399;
}
</style>