<template>
  <div id="app">
      <nav class="navbar is-transparent is-danger" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <router-link to="/">
            <i class="fas fa-store" style="font-size:20px; color:black"></i>
            <strong class="rainbow-text" style="color:black; margin-left:5px">E-Commerce</strong>
          </router-link>
          </a>

  
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
          </div> 
          <div class="navbar-item field">
            <p class="control has-icons-left">
              <input class="input is-rounded" type="text" placeholder="Search Product Name...">
              <span class="icon is-left">
                <i class="fas fa-search"></i> 
              </span>
            </p>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" style="background:none; border:none; font-size:22px">
                  <router-link to="/cart" style="color:white">
                    <i class="fas fa-shopping-basket"></i>
                    <a class="button is-small is-warning" style="border-radius:50%; font-size:9px; text-align:center"><b>{{userCart.length}}</b></a>
                  </router-link>
                </a>
                <a v-if="isLogin" class="button is-warning" style="background:none; border:1px white solid; font-size:16px">
                  <router-link to="/newProduct" style="color:white">
                    <i class="fas fa-plus"></i> Product
                  </router-link>
                </a>
                <!-- login -->
                <div v-if="!isLogin" class="dropdown is-right" :class="{'is-active': isActiveLogin}" style="margin-right:10px">
                  <div class="dropdown-trigger">
                    <button @click="isActiveLogin = !isActiveLogin" class="button is-warning" aria-haspopup="true" aria-controls="dropdown-menu2">
                      <span>Login</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-item">
                        <label for="email">Email :</label>
                        <input v-model="userLogin.email" type="text">
                        <label for="password">Password :</label>
                        <input v-model="userLogin.password" type="password">
                      </div>
                      <hr class="dropdown-divider">
                      <div class="dropdown-item">
                        <a class="button is-success" @click="login">submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- register -->
                <div v-if="!isLogin" class="dropdown is-right" :class="{'is-active': isActiveReg}" style="margin-right:10px">
                  <div class="dropdown-trigger">
                    <button @click="isActiveReg = !isActiveReg" class="button is-dark" aria-haspopup="true" aria-controls="dropdown-menu2">
                      <span>Sign Up</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-item">
                        <label for="username">Username :</label>
                        <input v-model="userRegis.username" type="text">
                        <label for="email">Email :</label>
                        <input v-model="userRegis.email" type="text">
                        <label for="password">Password :</label>
                        <input v-model="userRegis.password" type="password">
                      </div>
                      <hr class="dropdown-divider">
                      <div class="dropdown-item">
                        <a class="button is-success" @click="register">submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a v-if="isLogin" @click="logout" class="button is-primary">
                  <strong>Log out</strong>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  data(){
    return {
      isActiveLogin: false,
      isActiveReg: false,
      userLogin: {
        email : '',
        password : ''
      },
      userRegis : {
        username : '',
        email : '',
        password : ''
      }
    }
  },
  components : {
    
  },
  computed : {
    ...mapState(['isLogin', 'userCart']),
    
  },
  methods : {
    logout() {
      this.$store.dispatch('logout')
    },
    login(){
      this.$store.dispatch('login', this.userLogin)
    },
    register(){
      this.$store.dispatch('register', this.userRegis)
    }
  },
  created(){
    this.$store.dispatch('getUserCart', localStorage.getItem('userId'))
  }
  
  
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.rainbow-text {
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
}
</style>
