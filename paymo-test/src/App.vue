<template>
  <div id="app">
    <h1>VueJS Application</h1>
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
.fade-enter-active {
  transition: all .07s ease-in;
}
.fade-leave-active {
  transition: all .07s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

h1 {
  text-align: center;
}

#app {
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
