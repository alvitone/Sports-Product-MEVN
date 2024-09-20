<template>
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Are you sure you want to delete the product "{{ productName }}" from the database?</h2>
        <button @click="sendConfirm">Yes</button>
        <button @click="sendClose">No</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeleteProduct',
    props: ['productName'],
    emits: ['confirm', 'close'],
    methods: {
      sendConfirm() {
        this.$emit('confirm');
      },
      sendClose() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  