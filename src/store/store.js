import { reactive } from 'vue'

export const store = reactive({
  username: null,
  open: false,
  details: [],
  image: [],
  data: [],
  count:0,
  details: {
    productName: '',
    productAmount: '',
    category: '',
    quantity: '',
    productUrlId: ''
  }
})
