<template>
  <div>
    <header>
      <slot name="title"></slot>
    </header>
    <div>{{5 | currency}}一个页面</div>
    <!-- <br />
    <el-button @click="$emit('my-event', msg)">click me {{testId}}</el-button> -->
  </div>
</template>

<script>
export default {
  created() {
    window.console.log(this)
  },
  data() {
    return {
      msg: {
        name: "weiwei",
        age: 23
      }
    }
  },
  props: {
    testId: {
      type: String,
      default: 'yingyingying'
    }
  },
  filters: {
    currency : function (value) {
      return value + '毛'
    }
  }
}
</script>

<style>

</style>