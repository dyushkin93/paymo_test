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
}

.link {
  padding: 0.3em 0;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: $color-primary;
  cursor: pointer;
  background-image: linear-gradient($color-primary, $color-primary);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  opacity: .8;
  transition: background-size .2s;
  transition: opacity, .2s;
  &:hover {
    background-size: 100% 1px;
    opacity: 1;
  }
}

h2 {
  margin-top: 0;
  font-size: 1.25em;
}

</style>
