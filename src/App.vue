<template>
  <div id="app">

    <transition :name="transitionDirection" mode="out-in" @before-enter="afterEnter" appear>
      <router-view :key="$route.fullPath"/>
    </transition>

  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'dashboard',
  components: {
   
  },
  data() {
    return {
      transitionDirection: "slide-left-"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    afterEnter() {
      this.$root.$emit("scrollAfterEnter");
    }
  }
}
</script>

<

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

.slide-left--enter-active,
.slide-left--leave-active,
.slide-right--enter-active,
.slide-right--leave-active {
  // position: absolute;
  transition: opacity 0.6s, transform 0.6s;
}

.slide-left--enter,
.slide-right--leave-to {
  opacity: 0;
  transform: translate3d(20vw, 0, 0);
}

.slide-right--enter,
.slide-left--leave-to {
  opacity: 0;
  transform: translate3d(-20vw, 0, 0);
}


</style>
