<template>
    <order-form :orderID='orderID'> </order-form>
</template>

<script>
import OrderForm from '../orderform/OrderForm.vue'
export default {
  name:'OrderEdit',
  components: { OrderForm },
  props:{
    orderID:{
      required:true,
      type:String
    }
  }
}
</script>

<style>

</style>