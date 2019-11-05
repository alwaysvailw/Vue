<template>
  <div class="container">
    <div id="title">
      <transition
        appear
        appear-class="custom-appear-class"
        appear-to-class="custom-appear-to-class"
        appear-active-class="custom-appear-active-class"
      >
        <div 
          v-if="showLogo" id="logo"
          @click="clickLogo"
        >
          W
        </div>
      </transition>
      <div id="logo-follow-text">
        ei's Website with Vue
      </div>
    </div>
    
    
    <div class="nav">
      <el-menu 
        :default-active="activeTab" 
        :v-model="activeTab"
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">主页</el-menu-item>
        <el-submenu index="/demo">
          <template slot="title">例子</template>
          <el-menu-item index="/demo-1">Demo1</el-menu-item>
          <el-menu-item index="/demo-2">Demo2</el-menu-item>
          <el-menu-item index="/demo-3">Demo3</el-menu-item>
        </el-submenu>
        <nav-link
          v-for="(link, index) in navLinks" :key="index"
          :link="link"
        ></nav-link>
      </el-menu>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink'

export default {
  components: {
    NavLink
  },
  created() {
    //组件初始化时切换tab页(下方监听路由不能在初始化时获取到路由变化信息)
    this.activeTab = window.location.pathname
  },
  watch: {
    //监听路由变化切换tab页
    $route(now) {
      this.activeTab = now.path
    }
  },
  data() {
    return {
      showLogo: true, // 用于触发初始动画
      activeTab: '/', // 默认显示主页
      navLinks: [
        { path: 'https://blog.dev4wei.cn', name: 'Blog' },
        { path: 'https://github.com/alwaysvailw', name: 'Github' },
      ]
    }
  },
  methods: {
    clickLogo: function () { // 点击Logo
      location.reload();
    },
    handleSelect(key, keyPath) { // el-menu的选择事件
      window.console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
/* TheHeader容器 */
.container {
  height: 60px;
  margin: 0 auto;
  width: 80%;
  transition: all 1s;
  z-index: 150;
  position: relative;
}
/* 伪元素动画 */
.container::after {
  position: absolute;
  top: 58px;
  left: 0;
  height: 2px;
  width: 0;
  content: " ";
  transition: all 0.5s;
  background: rgba(0, 117, 172, 0.2);
}
.container:hover::after {
  width: 100%;
}
/* logo */
#logo {
  float: left;
  height: 60px;
  line-height: 60px;
  font-weight: 900;
  font-size: 60px;
  transition: all 0.5s;
}
/* logo初始化动画 */
.custom-appear-active-class {
  animation: bounce-in .5s;
}
/* logo hover动画 */
#logo:hover {
  transition: all 0.5s;
  cursor: pointer;
  transform: scale(1.21)
}
/* bounce-in动画 */
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(1.21);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
#logo-follow-text {
  float: left;
  height: 60px;
  line-height: 90px;
  font-weight: 800;
  font-size: 10px;
}
/* 导航栏 */
.nav {
  float: right;
  height: 60px;
}
/* 去除el-menu底部的边线 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
