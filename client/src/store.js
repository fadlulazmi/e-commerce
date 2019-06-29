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
    isLogin : localStorage.getItem('access_token') ? true : false,
    user : {
      _id : '',
      email : '',
      username : ''
    }
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
      state.isLogin = payload[2]
      state.user = payload[1]
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
      context.commit('updateIsLogin', false)
    }

  }
})
