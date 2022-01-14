<template>
<search-item></search-item> <!-- //0801-->
<list-items></list-items>
<navbar-items v-if="hasRoles(['editItems'])"> </navbar-items>
</template>

<script>
import ListItems from '../components/items/ListItems.vue'
import NavbarItems from '../layouts/NavbarItems.vue'
import SearchItem from './functionalities/SearchItem.vue'//0801
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name: 'ItemsIndex',
    components: {
        ListItems,
        NavbarItems,
        SearchItem,//0801

    },
      setup() {
    return {hasRoles}
  }
}
</script>

<style>

</style>
