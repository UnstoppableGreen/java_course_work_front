<template>
<search-user></search-user>
<list-user></list-user>
<navbar-clients v-if="hasRoles(['editClients'])"></navbar-clients>
</template>

<script>
import ListUser from '../components/user/ListUser.vue'
import SearchUser from './functionalities/SearchUser.vue'
import NavbarClients from '../layouts/NavbarClients.vue'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'UserIndex',
    components: {
        NavbarClients,
        ListUser,
        SearchUser,
    },
  setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
