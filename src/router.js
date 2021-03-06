import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home'
import UserIndex from './components/UserIndex'
import OrderIndex from './components/OrderIndex'
import UserCreate from './components/userform/UserCreate'
import UserEdit from './components/userform/UserEdit'

import OrderCreate from './components/orderform/OrderCreate'
import OrderEdit from './components/orderform/OrderEdit'
import OrderInfo from './components/orderform/OrderInfo'

import RequestsIndex from './components/RequestsIndex'
import RequestEdit from './components/requestform/RequestEdit'
import RequestCreate from './components/requestform/RequestCreate'

import ShipmentsIndex from './components/ShipmentsIndex'
import ShipmentInfo from './components/shipmentform/ShipmentInfo'
import ShipmentCreate from './components/shipmentform/ShipmentCreate'
import ShipmentEdit from './components/shipmentform/ShipmentEdit'

import ItemsIndex from './components/ItemsIndex'
import ItemEdit from './components/itemform/ItemEdit'
import ItemCreate from './components/itemform/ItemCreate'

import SuppliersIndex from './components/SuppliersIndex'
import SupplierEdit from './components/supplierform/SupplierEdit'
import SupplierCreate from './components/supplierform/SupplierCreate'

import CarriersIndex from './components/CarriersIndex'
import CarrierEdit from './components/carrierform/CarrierEdit'
import CarrierCreate from './components/carrierform/CarrierCreate'

import { useKeycloak } from '@baloise/vue-keycloak'

//const {roles, keycloak, hasRoles, hasResourceRoles,} = useKeycloak();
const { hasRoles } = useKeycloak();

//const hasAccess = computed(() => hasRoles(['chief']));
const routes = [
    {
		path: '/*',
		name: 'home',
        component: Home,
    },
	{
		path: '/home/',
		name: 'home',
        component: Home,
    },

	{
		path: '/clients',
		name: 'user.index',
        component: UserIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/clients/create',
        name:'user.create',
        component: UserCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editClients'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/clients/edit/:clientID',
        name:'user.edit',
        component:UserEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editClients'])) { next()}
            else {next(from)}
          }

    },
	//???????????????? ?????? ??????????????
	{
		path: '/orders',
		name: 'order.index',
        component: OrderIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/newOrder',
        name:'order.create',
        component: OrderCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editOrders'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/orders/edit/:orderID',
        name:'order.edit',
        component:OrderEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }

    },
    {
        path:'/orders/info/:orderID',
        name:'order.info',
        component:OrderInfo,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }

    },
		//???????????????? ?????? ???????????????? ?? ????????????????
	{
		path: '/requests',
		name: 'requests.index',
        component: RequestsIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/requests/edit/:requestID',
        name:'request.edit',
        component:RequestEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editRequests'])) { next()}
            else {next(from)}
          }
 
    },
    {
        path:'/requests/create',
        name:'request.create',
        component: RequestCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editRequests'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/shipments',
        name:'shipments.index',
        component: ShipmentsIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/shipments/info/:shipmentID',
        name:'shipment.info',
        component:ShipmentInfo,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/shipments/create',
        name:'shipment.create',
        component: ShipmentCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editShipments'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/shipments/edit/:shipmentID',
        name:'shipment.edit',
        component:ShipmentEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editShipments'])) { next()}
            else {next(from)}
          }

    },
   //???????????????? ?????? ????????????
	{
		path: '/items',
		name: 'items.index',
        component: ItemsIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/items/edit/:itemID',
        name:'item.edit',
        component:ItemEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editItems'])) { next()}
            else {next(from)}
          }

    },
    {
        path:'/items/create',
        name:'items.create',
        component: ItemCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editItems'])) { next()}
            else {next(from)}
          }
    },
       //???????????????? ?????? ??????????????????????
	{
		path: '/suppliers',
		name: 'suppliers.index',
        component: SuppliersIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/suppliers/edit/:supplierID',
        name:'supplier.edit',
        component:SupplierEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editSuppliers'])) { next()}
            else {next(from)}
          }

    },
    {
        path:'/suppliers/create',
        name:'supplier.create',
        component: SupplierCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editSuppliers'])) { next()}
            else {next(from)}
          }
    },
    //???????????????? ?????? ?????????????????????? ????????????????
	{
		path: '/carriers',
		name: 'carriers.index',
        component: CarriersIndex,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['watchAll'])) { next()}
            else {next(from)}
          }
    },
    {
        path:'/carriers/edit/:carrierID',
        name:'carrier.edit',
        component:CarrierEdit,
        props:true,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editCarriers'])) { next()}
            else {next(from)}
          }

    },
    {
        path:'/carriers/create',
        name:'carrier.create',
        component: CarrierCreate,
        beforeEnter: (to, from, next) => {
            if (hasRoles(['editCarriers'])) { next()}
            else {next(from)}
          }
    },

    //this.$keycloak.logout({"redirectUri":"http://localhost:3000/logout.html"})
  
]



export default createRouter({
	history: createWebHistory(),
	routes
})