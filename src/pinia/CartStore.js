import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        product: [
            { id: 1, product: "football", isFav: true },
            { id: 2, product: "cricket bat", isFav: false }
        ],
        name: 'Alvitone'
    })
});
