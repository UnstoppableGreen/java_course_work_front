<template>
<!--<search-user></search-user>-->
<list-order></list-order>
<navbar-orders v-if="hasRoles(['editOrders'])"> </navbar-orders>
</template>

<script>
import ListOrder from '../components/orders/ListOrder.vue'
import NavbarOrders from '../layouts/NavbarOrders.vue'
//import SearchUser from './functionalities/SearchUser.vue'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'OrderIndex',
    components: {
        NavbarOrders,
        ListOrder,
        //SearchUser,

    },
      setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
