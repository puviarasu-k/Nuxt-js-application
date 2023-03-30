// store.js
import { reactive } from 'vue'

export const store = reactive({
  username: null,
  open:false,
  update(name) {
    this.username = name
  },
  details: [],
  image: [],
  details: {
    productName: '',
    productAmount: Number,
    category: '',
    quantity: Number,
    productUrlId:''
  }
})
