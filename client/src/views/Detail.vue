<template>
  <div class="about">
    <hero :data="detail" />
  </div>
</template>

<script>

import hero from '../components/hero.vue';
import {mapState} from 'vuex'

export default {
  components : {
    hero
  },
  computed : {
    ...mapState(['detail'])
  },
  created(){
    const id = this.$route.params.id
    this.$store.dispatch('getDetails', id)
  }
}
</script>

