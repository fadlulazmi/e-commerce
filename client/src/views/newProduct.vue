<template>
  <div class="columns" style="display:flex; justify-content:center; padding:10px">
    <div class="column is-half" style="margin:50px; border : 3px solid #FF3860; border-radius:10%;">
      <form id="myForm">
        <div class="field">
          <label class="label">Product Name</label>
          <div class="control">
            <input v-model="newProduct.itemName" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input v-model="newProduct.price" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Stock(s)</label>
          <div class="control">
            <input v-model="newProduct.stock" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Product Description</label>
          <div class="control">
            <textarea v-model="newProduct.description" class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input @change="getImg()" ref="myImg" class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>             
            <span class="file-name">{{newProduct.img.name}}</span>
          </label>
        </div>

      </form>
        <br>

      <div class="field is-grouped">
        <div class="control">
          <button @click="submitNewProd" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>

import ax from '../api/server.js';

export default {
  name: "NewProduct",
  data() {
    return {
      newProduct: {
        itemName : '',
        price : '',
        stock : '',
        img : '',
        description : ''
      }
    }
  },
  methods : {
    submitNewProd(){
      // console.log(this.newProduct)
      let formData = new FormData()

      let keys = Object.keys(this.newProduct)

      keys.forEach(el => {
        formData.append(el, this.newProduct[el])
      })
    
      // console.log(JSON.stringify(formData, null, 2))
      // console.log('formData: ', formData.values());

      for(let k of formData.values()){
        console.log(k)
      }
      for(let v of formData.keys()){
        console.log(v)
      }
      this.createProd(formData)
    },
    createProd(formData){
      // ax({
      //   url : '/products',
      //   method : 'POST',
      //   data : formData
      // })
      ax.post('/products', formData)
        .then(({data}) => {
          console.log('berhasil', data)
          this.newProduct = {
            itemName : '',
            price : '',
            stock : '',
            img : '',
            description : ''
          }
          this.$router.push('/')
        })
        .catch(err => {
          console.log('masuk error');
          console.log(err.response.data)
        })
    },
    getImg(){
      this.newProduct.img = this.$refs.myImg.files[0]
    }
  }
};
</script>

<style>
</style>