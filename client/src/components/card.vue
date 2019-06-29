<template>
  <div>
    
    <div class="card" style="border:1px solid pink">
      <div class="card-image" style="border-bottom:2px solid #FF2B56">
        <figure class="image">
          <!-- product image -->
          <img :src="item.img" style="margin-bottom:25px">
        </figure>
      </div>
      
      <a @click="cardModal(item)" class="button" style="z-index:5; margin: -30px 0 0 170px; border: none; border-radius:30%; background-color: white; font-size:28px; color:#FF2B56"><i class="fas fa-cart-plus"></i></a>
      <!-- <i class="fas fa-plus"></i> -->
      <div class="card-content">
        <div class="media">
          <!-- product name -->
          <a style="color:black" @click="details(item._id)"><b>{{item.itemName.toUpperCase()}}</b></a>
          <br>      
            
          
        </div>
        <b><small style="color:#FF2B56; text-align: left">Rp {{item.price}}</small></b> 
        <!-- price -->

        <div class="content" style="text-align : left; font-size : 14px">
          <!-- description -->
          {{item.description}}
          <br>
          <b><small>stock : {{item.stock}}</small></b>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ModalForm from './modal'

export default {
  props : ['item'],
  components : {
    ModalForm
  },
  data() {
    return {};
  },
  methods : {
    details(id){
      this.$router.push(`/detail/${id}`)
    },
    cardModal(input) {
      
      this.$modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        props: {item : this.item}
        
        
      })
    }
  }
};
</script>

<style>
  .card:hover{
    background-image: url("https://cs1.alfacart.com/media/revamp/_base/load_anim_grey_landscape.gif");
    background-size:contain;
  }
  
</style>
