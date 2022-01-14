<template> 
    <tr>
        <td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{itemsdata.id}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{itemsdata.name}}
            </p>
        </td>
		<td class=" py-5  bg-white text-sm">
            <p class=" md:text-base text-gray-900 whitespace-no-wrap">
                {{supplier.name}} <!-- //0801-->
            </p>
         </td>    		  
         <td class="hidden md:table-cell text-center md:pl-1 md:py-5  bg-white text-sm">
			<router-link :to="{name:'item.edit', params: {itemID: itemsdata.id }} " class="text-gray-500  hover:text-blue-500  mx-2">
				<i class="font-bold transition duration-200 ease-in-out material-icons-outlined md:text-md">edit</i>
			</router-link>
            <a @click="deleteItem(itemsdata.id)" class="text-gray-500 cursor-pointer ml-2"  v-if="hasRoles(['editItems'])">
				<i class="transition duration-200 ease-in-out material-icons-round text-gray-500 hover:text-blue-500 md:text-md">remove</i>
            </a>
        </td>
       
    </tr>
   
</template>

<script>
import useItems from '../../composables/Items';
import useSuppliers from '../../composables/Suppliers';
import {onMounted} from '@vue/runtime-core'
import { useKeycloak } from '@baloise/vue-keycloak'
const { hasRoles } = useKeycloak();
export default {
    name:'Item',
    props:{
        itemsdata:{
            type:Object,
            require:true
        }
    },
	//<!-- //0801-->
    setup(props){
        const {deleteItem} = useItems()
		const {supplier, getSupplierById,} = useSuppliers()
		onMounted(async ()=>{
			await getSupplierById(props.itemsdata.defaultSupplierID)
        })
        return{
            deleteItem, supplier, hasRoles
        }
    }
	//<!-- //0801-->
    }
</script>

<style scoped>
    td{
        width: 8%;
    };
 
</style>