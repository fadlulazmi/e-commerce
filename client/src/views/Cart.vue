<template>
  <div style="background-image:url('https://wallpaperplay.com/walls/full/c/2/2/116945.jpg')">
    <!-- head -->
    <section class="hero is-light" style="height:120px">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <i class="fas fa-shopping-basket"></i>
          </h1>
          <h2 class="subtitle">Your Cart</h2>
        </div>
      </div>
    </section>
    <!-- cart -->
    <div v-for="cart in userCart" :key="cart._id" class="container" style="background-color:rgba(189, 86, 86, 0.1); margin-top:15px">
      <div class="columns">
        <div class="column is-one-quarter" style="height:150px">
          <img
            :src="cart.productId.img"
            alt="image"
            style="height : 100%; border:3px solid rgba(189, 86, 86, 0.7); border-radius:20%"
          >
        </div>
        <div class="column" style="text-align:left">
          <p>
            <small>
              <br>
              <b>Name :</b> {{cart.productId.itemName}}
              <br>
              <b>Amount :</b> {{cart.amount}}
              <br>
              <b>Price :</b>
              <b style="color:rgba(189, 86, 86, 1)">Rp. {{cart.productId.price*cart.amount}}</b>
            </small>
          </p>
          <div style="text-align:right; margin-right:50px">
            <a @click="deleteFromCart(cart._id)" class="button is-small is-danger">
              <b>DELETE</b>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- total -->
    <br>
    <div class="container" style="background-color:rgba(189, 86, 86, 0.1)">
      <div class="columns">
        <div class="column" style="text-align:right">
          <p style="border-top:2px dotted black; margin-right:30px; margin-left:30px">
            <br>
            <b>Total : </b>
            <b style="color:rgba(189, 86, 86, 1)"> Rp. {{totalPaymentCount}}</b>
            <br>
            <a class="button is-small is-success" style="width:150px">
              <b>PAY NOW</b>
            </a>
            <br>
          </p>
          <p style="font-size:26px; margin-right:30px">
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-paypal"></i>
            <i class="fab fa-cc-amazon-pay"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  data(){
    return {
      totalPayment : 0
    }
  },
  methods : {
    deleteFromCart(input){
      this.$store.dispatch('deleteCart', input)
    }
  },
  computed : {
    ...mapState(['userCart']),
    totalPaymentCount(){
      this.userCart.forEach(element => {
        this.totalPayment += (element.productId.price*element.amount)
      });
      return this.totalPayment
    }

  },
  created(){
    // this.$store.dispatch('getUserCart', localStorage.getItem('userId'))
  }
};
</script>

<style>
</style>
