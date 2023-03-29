// store.js
import { reactive } from 'vue'

export const store = reactive({
  username: null,
  update(name) {
    this.username = name
  },
  details:[],
  image:[]
})
