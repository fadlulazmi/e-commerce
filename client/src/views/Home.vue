<template>
  <div class="home">
    <carousel/>
    <br>
    <div class="columns is-multiline is-desktop" style="margin : 30px 100px 10px 100px">
      <div v-for="item in data" :key="item._id" class="column is-one-quarter"> <card :item="item"/></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import carousel from "../components/carousel.vue";
import card from "../components/card.vue";
import { mapState, mapActions } from 'vuex'

export default {
  name: "home",
  components: {
    HelloWorld,
    carousel,
    card
  },
  computed : {
    // ...mapActions(['getAllProducts']),
    ...mapState(['data']),

  },
  created(){
    this.$store.dispatch('getAllProducts')
  }
};
</script>
