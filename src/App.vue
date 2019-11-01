<template>
  <div id="app">
    <div class="headerWrapper">
      <the-header></the-header>
    </div>
    <div class="contentWrapper">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <el-scrollbar class="scrollbar">
        <router-view></router-view>        
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  name: 'app',
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.headerWrapper {
  width: 100%;
  height: 60px;
}
.scrollbar {
  height: 100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important
}
.contentWrapper {
  width: 100%;
  height: calc(100% - 60px);
}
.content {
  height: 100%;
}
</style>
