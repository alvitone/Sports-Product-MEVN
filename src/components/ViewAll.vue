<template>
  <div>
    <h1>All Products</h1>
    <div class="display" v-for="product in allProduct" :key="product.id">
      <p>{{ product.name }} - ${{ product.price }}</p>
      <button>add to the cart</button>
      <button class="button-49" @click="changeShowModal(product.name)">delete</button>
      <font-awesome-icon :icon="['fas', 'trash']" style="color: #ff0000;" />
      <!-- Ensure this component is only shown when showModal is true -->
      <DeleteProduct
        v-if="showModal"
        @confirm="deleteTheProductFromTheDatabase"
        @close="closeModal"
        :productName="selectedProductName"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DeleteProduct from './DeleteProduct.vue';

export default {
  name: 'ViewAll',
  components: {
    DeleteProduct
  },
  data() {
    return {
      allProduct: [],
      showModal: false,
      selectedProductName: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:4000/api/products/findall');
      this.allProduct = response.data;
    } catch (error) {
      console.error('Error while getting all the products:', error);
    }
  },
  methods: {
    changeShowModal(productName) {
      this.selectedProductName = productName;
      this.showModal = true;
    },
    async deleteTheProductFromTheDatabase() {
      if (this.selectedProductName) {
        try {
          console.log('Deleting product with name:', this.selectedProductName);
          await axios.delete(`http://localhost:4000/api/products`, {
            data: { name: this.selectedProductName }
          });
          // Remove the deleted product from the UI
          this.allProduct = this.allProduct.filter(product => product.name !== this.selectedProductName);
        } catch (error) {
          console.log('Error while deleting the product:', error);
        } finally {
          this.closeModal();
        }
      } else {
        console.error('No product name selected');
        this.closeModal();
      }
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
.display {
  max-width: 360px;
  margin: 15px auto;
  background: hsla(153, 88%, 80%, 0.651);
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}




</style>
