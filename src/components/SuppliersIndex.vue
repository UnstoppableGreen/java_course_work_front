<template>
<!--<search-user></search-user>-->
<list-suppliers></list-suppliers>
<navbar-suppliers v-if="hasRoles(['editSuppliers'])"> </navbar-suppliers>
</template>

<script>
import ListSuppliers from '../components/suppliers/ListSuppliers.vue'
import NavbarSuppliers from '../layouts/NavbarSuppliers.vue'
//import SearchUser from './functionalities/SearchUser.vue'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'SuppliersIndex',
    components: {
        ListSuppliers,
        NavbarSuppliers,
        //SearchUser,

    },
  setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
