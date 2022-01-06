<template>
<!--<search-carrier></search-carrier>-->
<list-carriers></list-carriers>
<navbar-carriers> </navbar-carriers>
</template>

<script>
import ListCarriers from '../components/carriers/ListCarriers.vue'
import NavbarCarriers from '../layouts/NavbarCarriers.vue'
//import SearchCarrier from './functionalities/SearchCarrier.vue'

export default {
    name: 'CarriersIndex',
    components: {
        ListCarriers,
        NavbarCarriers,
       // SearchCarrier,

    },

}
</script>

<style>

</style>
