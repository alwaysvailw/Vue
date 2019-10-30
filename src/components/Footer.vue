<template>
  <div class="footer">
    <p>
      {{mark}}
      <el-link :underline="false" icon="el-icon-edit" type="info" href="https://blog.dev4wei.cn" target="_blank">wei</el-link>
      </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: 'Copyright 2019 by ',
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
