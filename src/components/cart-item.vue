<template>
 <div class="cart-item__cont">
  <div class="img-cont">
    <img :src="itemCart.img_url" :alt="itemCart.id">
    <div class="name">{{itemCart.name}}</div>
    <button class="plus-cont minus-cont" v-show="itemCart.added" @click=" del()">
     <span class="plus" >Delete</span>
    </button>
   </div>
   <div class="price-cont price-cart__cont">
    <span class="price">{{mathFunc}}</span>
    <div class="quantity-cart">
      {{itemCart.quantity}}
    </div>
  </div>
 </div>
</template>

<script>
import { bus } from './../index.js'
export default {
 props: {
  itemCart: {
   type: Object,
   default() {
    return {}
   }
  }
 },
 data(){
   return{
     sum: Number
   }
 },
 computed: {
   mathFunc(){
    return (this.itemCart.quantity*this.itemCart.price).toFixed(2)
  }
 },
 methods: {
  del() {
    bus.$emit('deleteCart', this.itemCart.id)
  },
  
 },
 mounted(){
 }
}
</script>