<template>
  <div>
    <h1>Book-List</h1>
    <div class="book-list">
      <el-link icon="el-icon-notebook-2" :underline="false" href="http://docker_practice.dev4wei.cn" target="_blank">Docker — 从入门到实践</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book'
}
</script>

<style>
.book-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>