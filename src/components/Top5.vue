<template>
  <div>
    <h1>Top 5 Products</h1>
    <div class="display" v-for="product in topfive" :key="product._id">
      <p>{{ product.name }} - ${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Top5',
  data() {
    return {
      topfive: [] // Initialize as an empty array
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:4000/api/products/topfive');
      this.topfive = response.data; // Set the topfive data to the response data
    } catch (error) {
      console.error("Error while getting the top five products:", error);
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
