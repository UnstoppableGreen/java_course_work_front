<template>
<!--<search-user></search-user>-->
<list-requests></list-requests>
<navbar-requests v-if="hasRoles(['editRequests'])"> </navbar-requests>
</template>

<script>
import ListRequests from '../components/requests/ListRequests.vue'
import NavbarRequests from '../layouts/NavbarRequests.vue'
//import SearchUser from './functionalities/SearchUser.vue'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'RequestsIndex',
    components: {
        ListRequests,
        NavbarRequests,
        //SearchUser,
    },
  setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
