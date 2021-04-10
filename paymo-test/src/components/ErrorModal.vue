<template>
  <div :class="$style.wrapper">
    <h2>Error</h2>
    <p>An error has occured during registation. Please, try again.</p>
    <router-link :class="$style.link" to="/">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'errorModal',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped module>
.wrapper {
  @include material-card;
}

.link {
  @include link;
}

h2 {
  margin-top: 0;
  font-size: 1.25em;
}
</style>
