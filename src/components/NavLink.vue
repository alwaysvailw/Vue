<template>
  <a class="link" :href="link.path" target="_blank">{{link.name}}</a>
</template>

<script>
export default {
  props: [
    'link'
  ]
}
</script>

<style scope>
.link {
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  color: #909399;
  transition: all 0.3s
}
.link:hover {
  color: #303133
}
</style>