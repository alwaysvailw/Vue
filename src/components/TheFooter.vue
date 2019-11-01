<template>
  <div class="the-footer">
    <p>{{mark}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: 'Copyright 2019 by wei',
    };
  },
  methods: {
  }
}
</script>

<style scoped>
/* Copyright字体和颜色 */
p {
  color:lightgray;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
/* [wei](https://blog.dev4wei.cn)链接对齐 */
.el-link {
  line-height: 17px;
}
</style>
