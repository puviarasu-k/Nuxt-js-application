import { reactive } from 'vue'

export const store = reactive({
  username: null,
  open:false,
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
