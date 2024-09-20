import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Ensure you have this component or any other default component
import AddForm from '../components/AddForm.vue'; // The AddForm component
import Top5 from '../components/Top5.vue'; // Assuming you have a Top 5 component
import Cart from '../components/Cart.vue'; // Assuming you have a Cart component
import ViewAll from '../components/ViewAll.vue';




const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add-form', name: 'AddForm', component: Home },
  { path: '/top5', name: 'Top5', component: Top5 },
  { path: '/cart', name: 'Cart', component: Cart },
  {path:'/all-products',name:'ViewAll',component:ViewAll},
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
