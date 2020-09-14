<template>
 <div class="catalog-item">
  <div class="item__cont">
    <div class="img-cont">
      <img :src="itemData.img_url" :alt="itemData.id" >
      <div class="name">{{itemData.name}}</div>
      <button class="plus-cont" v-show="!itemData.added" @click="returnData(); addDelete()">
       <span class="plus" >Add</span>
      </button>
      <button class="plus-cont minus-cont" v-show="itemData.added" @click="addDelete(); del()">
       <span class="plus" >Delete</span>
      </button>
    </div>
    <div class="price-cont">
      <span class="price">{{itemData.price}}</span>
      <div class="quantity-cont" v-show="itemData.added">
        <span class="next" @click="quantity(); itemData.quantity++"></span>
        <span class="prev" @click="quantity(); itemData.quantity > 1 ? itemData.quantity-- : ''"></span>
        <span class="quanity-val">{{itemData.quantity}}</span>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { bus } from '../index.js'
export default {
 props: {
  itemData: {
   type: Object,
   default() {
    return {}
   }
  }
 },
 methods: {
  addDelete(){
    this.itemData.added = !this.itemData.added
  },
  returnData(){
    this.$emit('itemArticle', this.itemData)
  },
  del(){
    this.$emit('deleteItem', this.itemData.id)
  },
  quantity(){
    this.$emit('quantity', this.itemData)
  }
 },
 mounted(){
    this.$set(this.itemData, 'added', false)
    this.$set(this.itemData, 'quantity', 1)
 },
 created(){
   bus.$on('deleteCart', id => {
     if (this.itemData.id === id) {
       this.itemData.added = false
     }
   })
 }
}
</script>