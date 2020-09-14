<template>
 <div class=" catalog">
  <item
  v-for="inf in info"
  :key="inf.id"
  :itemData="inf"
  @itemArticle="itemArticle"
  @deleteItem="deleteItem"
  @quantity="quantity"
  />
 </div>
</template>

<script>
import item from './item.vue'
import { bus } from './../index.js'
export default {
  props: {
    info: {
      type: Array,
        default() {
          return {}
      }
    }
  },
 data(){
  return{}
 },
 components: {
  item
 },
 computed: {

 },
 methods: {
  itemArticle(data){
    bus.$emit('itemArticle', data)
  },
  deleteItem(id) {
    bus.$emit('deleteItem', id)
  },
  quantity(data){
    bus.$emit('quantity', data)
  }
 },
 mounted(){
 }
}
</script>