<template>
  <div>
    <h1>User {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'user',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      window.console.log(`route to `, to)
      window.console.log(`route from `, from)
    }
  }
}
</script>

<style scoped>

</style>>