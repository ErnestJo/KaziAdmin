<template>
    <h2>Hello am in jobs</h2>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ general: 'general' }),
  },
  created () {
    this.$store.dispatch('_fetchcategory'),
    console.log(this.general)
  },
};
</script>
