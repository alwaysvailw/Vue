<template>
  <el-menu-item>
    <a class="link" :href="link.path" target="_blank">{{link.name}}</a>
  </el-menu-item>
</template>

<script>
export default {
  props: [
    'link'
  ]
}
</script>

<style>
.link {
  text-decoration: none;
  font-weight: bold;
}
</style>