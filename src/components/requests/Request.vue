<template> 	
	<tr>	
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.id}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.orderID}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.itemID}}
            </p>
        </td>
        <td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.qty}}
            </p>
        </td>
        <td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{status.name}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{supplier.name}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.creationDate}}
            </p>
          </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.estimateDeliveryDate}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{requestsdata.deliveryDate}}
            </p>
        </td> 		
          <td class="hidden md:table-cell text-center md:pl-1 md:py-5  bg-white text-sm" v-if="hasRoles(['editRequests'])">
			<router-link :to="{name:'request.edit', params: {requestID: requestsdata.id }} " class="text-gray-500  hover:text-blue-500  mx-2">
				<i class="font-bold transition duration-200 ease-in-out material-icons-outlined md:text-md">edit</i>
			</router-link>
            <a @click="deleteRequest(requestsdata.id)" class="text-gray-500 cursor-pointer ml-2"  >
				<i class="transition duration-200 ease-in-out material-icons-round text-gray-500 hover:text-blue-500 md:text-md">delete</i>
            </a>
        </td> 
       
    </tr>
   
</template>

<script>
import useRequests from '../../composables/Requests'
import useStatuses from '../../composables/Statuses'
import useSuppliers from '../../composables/Suppliers';
import {onMounted} from '@vue/runtime-core'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name:'Request',
    props:{
        requestsdata:{
            type:Object,
            require:true
        }
    },
    setup(props){
        const {deleteRequest} = useRequests()
        const {supplier, getSupplierById,} = useSuppliers()
		onMounted(async ()=>{
			await getSupplierById(props.requestsdata.actualSupplierID)
        })
        const {status, getStatusById,} = useStatuses()
		onMounted(async ()=>{
			await getStatusById(props.requestsdata.statusID)
        })
        return{
            deleteRequest, hasRoles,supplier,status
        }
    }
    }
</script>

<style scoped>
    td{
        width: 8%;
    };
 
</style>