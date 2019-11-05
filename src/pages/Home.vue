<template>
  <div>
    <h1>Home</h1>
    <home-component test-id="homecomp" @my-event="onclick">
      <template v-slot:title>
        <h1>Here might be a page title</h1>
      </template>
    </home-component>
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="currentTab = tab"
    >{{tab}}</button>
    <component
      :is="currentTabComponent"
    ></component>
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent'
import Demo1 from './Demo/Demo1'
import Demo2 from './Demo/Demo2'

export default {
  name: 'home',
  components: {
    HomeComponent,
    Demo1,
    Demo2
  },
  data() {
    return {
      currentTab: 'Demo1',
      tabs: ['Demo1', 'Demo2']
    }
  },
  methods: {
    onclick(e) {
      window.console.log(e)
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab
    }
  }
}
</script>

<style>

</style>