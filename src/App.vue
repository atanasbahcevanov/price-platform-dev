<template>
  <div id="app">
    <Header/>
    <transition name="moveInUp">
      <router-view :key="$route.fullPath"/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/LandingHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "dashboard",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      transitionDirection: "slide-up-"
    };
  },
  methods: {}
};
</script>



<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #1a896e;
    }
  }
}

.moveInUp-enter-active {
  opacity: 1;
  transition: opacity .5s;
}

.moveInUp-leave-active{
  opacity: 0;
}


</style>
