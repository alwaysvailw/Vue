<template>
  <div class="container">
    <div class="nav">
      <el-menu 
        :default-active="activeTab" 
        :v-model="activeTab"
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">Home</el-menu-item>
        <el-submenu index="/demo">
          <template slot="title">Demo</template>
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
      activeTab: '/',
      navLinks: [
        { path: 'https://blog.dev4wei.cn', name: 'Blog' },
        { path: 'https://github.com/alwaysvailw', name: 'Github' },
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
.container {
  height: 60px;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #dcdfe6;
  z-index: 150;
}
.nav {
  float: right;
  height: 60px;
}
</style>
