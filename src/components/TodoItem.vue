<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: [
    'title'
  ],
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>