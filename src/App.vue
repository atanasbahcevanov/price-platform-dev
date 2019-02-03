<template>
  <div id="app">
     <Header/>
   
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'dashboard',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #1A896E;
    }
  }
}
</style>
