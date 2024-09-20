<template>
  <div style="
    width: 100%;
    height: 91vh;
">

    <form @submit="handleSubmit">
      <h1 style="text-align: center;">FORM</h1>
      <label>Product Name</label>
      <input required v-model="productName" placeholder="Enetr the product name"/>
      
      <label>Product Price</label>
      <input type="number" required v-model="productPrice" placeholder="Enter the product price"/>

      <label>Available</label>
      <select v-model="available">
        <option value="true">YES</option>
        <option value="false">NO</option>
      </select>
      
      <label>Feedback</label>
      <textarea id="" name="" rows="4" cols="50">

</textarea>

      <div class="button-container">
        <button class="button-70">Add Product</button>
        <button class="close-button" @click="closeModal">close</button>
      </div>
    </form>

    <!-- Popup message -->
    <div v-if="message" class="popup">{{ message }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'AddForm',
  data() {
    return {
      productName: '',
      productPrice: '',
      available: null,
      message: '' // For the popup message
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const product = {
        name: this.productName,
        price: this.productPrice,
        available: this.available === 'true'
      };
      
      try {
        const response = await axios.post('http://localhost:4000/api/products', product);
        this.message = "Product added successfully!"; // Set the popup message
        this.resetForm(); // Reset the form fields
        console.log("Product added", response.data);
      } catch (error) {
        console.log("Error while adding the product", error);
      }
    },
    resetForm() {
      this.productName = '';
      this.productPrice = '';
      this.available = null;
      setTimeout(() => {
        this.message = ''; // Clear the message after 3 seconds
      }, 3000);
    },
    closeModal() {
      // Return to the home page when the modal is closed
      router.push('/');
    }
  }
};
</script>

<style>
form {

  margin: 30px auto;
  background: #34efdf;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  height: 86%;
}

label {
  color: #160707;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 20px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  border: 1px solid black;
    border-radius: 7px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* CSS for the button */
.button-70 {
  background-image: linear-gradient(#0dccea, #0d70ea);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 0.9em;
  padding: 10px 15px;
  text-align: center;
}

/* Popup message style */
.popup {
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 5px;
}


.close-button{
  
  
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 0.9em;
  padding: 10px 15px;
  text-align: center;
  background-color:#d41313;
  border-radius:7px


}

textarea{
  display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    border: 1px solid black;
    border-radius: 7px;
}

.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}


</style>
