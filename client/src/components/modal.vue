<template>
<form @submit="addToCart">
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">{{item.itemName}}</p>
            
        </header>
        <section class="modal-card-body">
            <b-field label="amount">
                <b-input
                    type="number"
                    value='0'
                    :max="item.stock"
                    required>
                </b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary">Submit</button>
        </footer>
    </div>
</form>
</template>

<script>



export default {
    props : ['item'],
    methods : {
        addToCart(){
            this.$store.dispatch('addToCart', {item : this.item, userId : localStorage.getItem('')})
        }
    }
}
</script>

<style>

</style>
