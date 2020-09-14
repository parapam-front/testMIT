<template>
 <div class="cart-cont">
  <h1>Cart</h1>
  <cartItem
  v-for="inf in info"
  :key="inf.id"
  :itemCart="inf"
  />
  <div class="cart-sum">{{sum}}</div>
 </div>
 
</template>

<script>
import cartItem from './cart-item.vue'
import { bus } from './../index.js'
export default {
 data(){
  return{
   info: [],
   lol: null
  }
 },
 components: {
  cartItem
 },
 computed: {
  sum(){
   if(this.info.length > 0) {
    this.lol = null
   for( var i = 0; i < this.info.length; i++){
    this.lol+=(this.info[i].price*this.info[i].quantity)
   }
   return this.lol.toFixed(2)
   }
  }
 },
 methods: {
  
 },
 created(){
  bus.$on('itemArticle', data => {
   this.info.push(data)
  })
  bus.$on('deleteItem', data =>{
   // console.log(data);
   for (var i = 0; i < this.info.length; i++) {
    if( this.info[i].id === data) {
     this.info.splice(i, 1)
    }
   }
  })
  bus.$on('deleteCart', id => {
   for(var i = 0; i < this.info.length; i++){
    if (this.info[i].id === id) {
     this.info.splice(i, 1)
    }
   }
  })
  bus.$on('quantity', data => {
   for (var i = 0; i < this.info.length; i++){
    if (this.info[i] === data) {
     this.info.quantity = data.quantity
    }
   }
  })
 }
}
</script>