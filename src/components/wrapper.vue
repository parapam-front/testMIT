<template>
 <div class="wrapper">
  <h1>Catalog</h1>
  <catalog
  :info="info"
  />
  <cart/>
 </div>
</template>

<script>
import catalog from './catalog.vue'
import cart from './cart.vue'

export default {
 name: 'wrapper',
 data(){
  return{
   info: null
  }
 },
 components: {
  catalog,
  cart
 },
 methods: {},
 mounted(){
  axios
   .get('https://run.mocky.io/v3/0fb7ba7e-5158-4e4f-bfc8-28320bc01cdc')
   .then(response => this.info = response.data)
   .catch(err => console.log(err))
 }
}
</script>