import Vue from 'vue'
import Vuex from 'vuex'
import ax from './api/server'
import router from './router'
import { isContext } from 'vm';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data : [],
    detail : [],
    userCart : [],
    isLogin : localStorage.getItem('access_token') ? true : false,
  },
  mutations: {
    allProducts(state, payload){
      state.data = payload
      console.log('context.state.data: ', state.data);
      
    },
    details(state, payload){
      state.detail = payload
    },
    updateIsLogin(state, payload){
      
      state.isLogin = payload[0]
      
    },
    userCart(state, payload){
      state.userCart = payload
    }
  },
  actions: {
    getAllProducts(context, payload){
      
      ax({
        url : '/products',
        method : 'GET'
      })
        .then(({data}) => {
          context.commit('allProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDetails(context, payload){
      console.log(payload, 'payload actions detail')
      ax({
        url : `/products/${payload}`,
        method : 'GET',
      })
        .then(({data}) => {
          context.commit('details', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login(context, payload){
      ax({
        url : `/user/login`,
        method : 'POST',
        data : payload
      })
        .then(({data}) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('userId', data.user._id)
          context.commit('updateIsLogin', [true, data.user])
        })
        .catch(err => {
          console.log(err);
        })
    },
    register(context, payload){
      ax({
        url : `/user/register`,
        method : 'POST',
        data : payload
      })
        .then(({data}) => {
          context.dispatch('login', {email : data.email, password : payload.password})
        })
        .catch(err => {
          console.log(err);
        })
    },
    logout(context, payload){
      localStorage.clear()
      context.commit('updateIsLogin', [false, null])
    },
    addToCart(context, payload){
      console.log(JSON.stringify(payload), 'payloaaaaaaaaaaaaad')
      ax({
        url : '/carts',
        method : 'POST',
        data : {
          productId : payload.item._id,
          amount : payload.amount,
          paymentStatus : false,
        }
      })
        .then(({data}) => {
          console.log('===========================')
          context.dispatch('updateProduct', [data, payload.item.stock])
        })
        .catch(err => {
          // console.log(err);
          console.log(JSON.stringify(err, null, 2))
        })
    },
    updateProduct(context, payload){
      console.log(payload, 'updaeprdct')
      ax({
        url : `/products/${payload[0].productId}`,
        method : 'PUT',
        data : {
          amount : (payload[1] - payload[0].amount)
        }
      })
        .then(({data}) => {
          router.push('/')
          console.log(data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getUserCart(context, payload){
      console.log(payload)
      ax({
        url : `/carts/${payload}`,
        method : 'GET'
      })
        .then(({data}) => {
          console.log(JSON.stringify(data), 'getusercart')
          context.commit('userCart', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteCart(context, payload){
      ax({
        url : `/carts/${payload}`,
        method: 'DELETE'
      })
        .then(({data}) => {
          context.dispatch('getUserCart', localStorage.getItem('userId'))
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
})
