<template>
<form @submit.prevent="addToCart">
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">{{item.itemName}}</p>
            
        </header>
        <section class="modal-card-body">
            <b-field label="amount">
                <b-input
                    v-model="amount"
                    type="number"
                    value='0'
                    :max="item.stock"
                    required>
                </b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click.prevent="$parent.close()">Close</button>
            <button class="button is-primary" type="submit">Submit</button>
        </footer>
    </div>
</form>
</template>

<script>

// import {mapState} from 'vuex'

export default {
    props : ['item'],
    data(){
        return {
            amount : 0,
            
        }
    },
    methods : {
        addToCart(){
            console.log(this.amount, 'amooooooooooooooooooooount')
            this.$store.dispatch('addToCart', {item : this.item, amount : this.amount})
        }
    },
    computed : {
        // ...mapState(['user'])
    }
}
</script>

<style>

</style>
