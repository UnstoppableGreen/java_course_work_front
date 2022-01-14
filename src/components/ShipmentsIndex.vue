<template>
<list-shipments></list-shipments>
<navbar-shipments v-if="hasRoles(['editShipments'])"> </navbar-shipments>
</template>

<script>
import ListShipments from '../components/shipments/ListShipments.vue'
import NavbarShipments from '../layouts/NavbarShipments.vue'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'ShipmentsIndex',
    components: {
        NavbarShipments,
        ListShipments,

    },
  setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
