<template>
  <div :class="$style.home">
    <h2>Hello, {{this.$store.getters.FULL_NAME}}!</h2>
    <router-link
            :class="$style.link"
            to="register">
          Registration
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped module>
.home {
  @include material-card;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  padding: 1em;
}

.link {
  padding: 0.3em 0;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: $color-primary;
  cursor: pointer;
  &:hover {

  }
}

h2 {
  font-size: 1.25em;
}

</style>
