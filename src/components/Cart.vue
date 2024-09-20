<template>
  <div class="font-effect-shadow-multiple">
    <h1>This is a font effect! {{ cartStore.product }}</h1>
  </div>
</template>

<script>
import { useCartStore } from '../pinia/CartStore'; // Adjust path if necessary

export default {
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  }
}
</script>
