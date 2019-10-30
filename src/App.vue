<template>
  <div id="app">
    <el-container>
      <el-header><Header /></el-header>
      <el-main>Main</el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
