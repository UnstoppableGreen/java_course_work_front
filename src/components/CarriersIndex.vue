<template>
  <!--<search-user></search-user>-->
  <list-carriers></list-carriers>
  <navbar-carriers v-if="hasRoles(['editCarriers'])"> </navbar-carriers>
</template>

<script>
import ListCarriers from "../components/carriers/ListCarriers.vue";
import NavbarCarriers from "../layouts/NavbarCarriers.vue";
//import SearchUser from './functionalities/SearchUser.vue'

import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();

export default {
  name: "CarriersIndex",
  components: {
    ListCarriers,
    NavbarCarriers,
    //SearchUser,
  },
  setup() {
    return {hasRoles}
  }
  
};
</script>

<style>
</style>
