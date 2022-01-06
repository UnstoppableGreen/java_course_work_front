<template>
<search-request></search-request>
<list-requests></list-requests>
<navbar-requests> </navbar-requests>
</template>

<script>
import ListRequests from '../components/requests/ListRequests.vue'
import NavbarRequests from '../layouts/NavbarRequests.vue'
import SearchRequest from './functionalities/SearchRequest.vue'

export default {
    name: 'RequestsIndex',
    components: {
        ListRequests,
        NavbarRequests,
        SearchRequest,

    },

}
</script>

<style>

</style>
