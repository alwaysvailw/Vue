<template>
  <div>
    <h1>Vue Router Demo</h1>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="/demo-vue-router"
          class="el-menu-vertical-demo"
          collapse
          router>
          <el-menu-item index="/demo-vue-router">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/demo-vue-router/demo-vue-router-1">
            <i class="el-icon-ice-cream-round"></i>
            <span slot="title">Router1</span>
          </el-menu-item>
          <el-menu-item index="/demo-vue-router/demo-vue-router-2">
            <i class="el-icon-ice-cream-square"></i>
            <span slot="title">Router2</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="21">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'demo-vue-router',
  data() {
    return {
      transitionName: 'slider-right'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/')
    const fromDepth = from.path.split('/')
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
}
</script>

<style scoped>
.tac {
  padding: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  padding: 20px;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>