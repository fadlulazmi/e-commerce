<template>
  <div>
    <section class="hero is-medium is-dark">
      <div class="hero-body" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZH27VeV_iZfNoi3LffSuTYO6ogNMh4oedWxVtA-updkF5B-j7w'); background-size:cover">
        <div class="container">
            <div class="columns" style="height: 300px">
                <div class="column is-one-quarter">
                    <img :src="data.img" alt="image" style="width:100%; border:3px solid rgba(189, 86, 86, 0.7); border-radius:20%">
                </div>
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column-6" style="text-align: left; margin-left:20px; color:black">
                            <p>
                                <br>
                                <br>
                                <b>DETAIL PRODUCT</b> 
                                <br>
                                <br>
                                <b>Name : </b>{{data.itemName.toUpperCase()}}
                                <br>
                                <br>
                                <b>Description : </b>{{data.description}}
                                <br>
                                <br>
                                <b><small>stock : {{data.stock}}</small></b>
                                <br>
                                <br>                               
                            </p>
                            <div class=" has-text-right">
                                <a class="button is-danger" style="margin-right:-200px">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props : ['data']
};
</script>

<style>
</style>
