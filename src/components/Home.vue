<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <button @click="openModal">Open Modal</button>

    <Teleport to="body">
      <div v-if="$route.path === '/add-form'" class="modal-overlay">
        <div class="modal">
         
          <AddForm />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import AddForm from './AddForm.vue';
import router from '@/router'; // Import the router

export default {
  name: 'Home',
  components: {
    AddForm, // Ensure AddForm is registered here
  },
  methods: {
    openModal() {
      // Change URL to /add-product without changing the page content
      router.push('/add-form');
    },
    
  },
};
</script>

<style scoped>
/* Modal overlay styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal box styling */
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width:100%;
  margin: 0 10px;
  
}

/* Close button styling */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
