<template>
 <div>
  <!-- <div v-for="(inf, index) in info" :key="index">
   <div class="img-cont">
    <img :src="inf.img_url" :alt="inf.id">
    <div class="name">{{inf.name}}</div>
    <div class="plus-cont">
     <span class="plus">Add to cart</span><span class="minus">Delete</span>
    </div>
   </div>
   <div class="price-cont">
    <span class="price">{{inf.price}}</span>
    <div class="quantity-cont">
      <span class="next"></span>
      <span class="prev"></span>
      <span class="quanity-val">0</span>
    </div>
   </div>
  </div> -->
  <wrapper/>
 </div>
</template>

<script>
import wrapper from "./components/wrapper.vue"
export default {
 components: {
   wrapper
 },
 data(){
  return{
  //  info: null
  }
 },
//  mounted(){
//   axios
//    .get('https://run.mocky.io/v3/0fb7ba7e-5158-4e4f-bfc8-28320bc01cdc')
//    .then(response => this.info = response.data)
//    .catch(err => console.log(err))
//  }
}
</script>

