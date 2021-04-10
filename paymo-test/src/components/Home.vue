<template>
  <div :class="$style.home">
    <h2>Hello, {{ user.fullName }}!</h2>
    <router-link v-if="!user.id" :class="$style.link" to="register">
      Registration
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      user: {
        id: this.$store.getters.ID,
        fullName: this.$store.getters.FULL_NAME,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped module>
.home {
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
