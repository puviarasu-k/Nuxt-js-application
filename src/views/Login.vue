<script setup>
import router from '../router/index'
import { store } from '../store/store'
</script>
<template>
  <main>
  <form class="shadow-orange-400 shadow-lg ring-2 rounded-lg ring-orange-500 flex flex-col justify-around items-center w-1/3 h-[400px] mt-52 m-auto" @submit.prevent="submitclick">
    <h1 class="px-8 text-lg bg-gradient-to-r from-orange-400 to-red-400 font-semibold py-2 rounded-full h-fit">Welcome
      </h1>
      <Input v-model="username" placeholder="Enter username" />
      <Input v-model="password" placeholder="Enter Password" type="password" />
      <section class="flex items-center ">
        <input required type="checkbox" class="accent-orange-500">
        <span class="text-lg">&nbsp;I agree to the terms and condition</span>
      </section>
      <span v-if="errormsg != ''" class="font-semibold text-red-600">{{ this.errormsg }}</span>
      <button class="w-96 bg-orange-500 py-2 rounded-3xl hover:bg-orange-600" type="submit">Log In</button>
      <RouterLink to="/register" class="text-blue-500 font-semibold"> <span class="text-black cursor-text">New
          User?</span> Sign up</RouterLink>
    </form>
  </main>
</template>

<script>
import authservice from '../service/authservice'
import Input from '../components/input.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      errormsg: ''
    }
  },
  methods: {
    async submitclick() {
      const data = {
        username: this.username,
        password: this.password
      }
      try {
        var now = new Date();
        now.setTime(now.getTime() + (10 * 60 * 1000));
        const op = await authservice.login(data);
        document.cookie = `token=${op.data.token}; expires=${now.toUTCString()}`;
        localStorage.setItem("username", op.data.nameuser);
        router.push('/products')
      } catch (error) {
        this.errormsg = error.response.data.message
      }
    }
  }
}
</script>
