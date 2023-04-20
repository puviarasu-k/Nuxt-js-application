<script setup>
import router from '../router/index'
import { store } from '../store/store'
</script>
<template>
  <main class="flex justify-center items-center h-screen">
    <form
      class="shadow-orange-400 shadow-lg ring-2 rounded-lg ring-orange-500 flex flex-col justify-around items-center w-4/5 md:w-1/2 xl:w-1/3 h-[400px]"
      @submit.prevent="submitclick">
      <h1 class="text-center w-1/2 truncate sm:text-lg bg-gradient-to-r from-orange-400 to-red-400 font-semibold py-2 rounded-full h-fit text-sm">Welcome
      </h1>
      <Input v-model="username" placeholder="Enter username" />
      <Input v-model="password" placeholder="Enter Password" type="password" />
      <span v-if="errormsg != ''" class="font-semibold text-red-600">{{ this.errormsg }}</span>
      <button class="xl:w-96 px-10 bg-orange-500 py-2 rounded-3xl hover:bg-orange-600" type="submit">Log In</button>
      <RouterLink to="/register" class="text-blue-500 font-semibold"> <span class="text-black cursor-text">New
          User?</span> Sign up</RouterLink>
    </form>
    <Transition>
      <Toaster :message="this.message" v-show="this.toast" class="text-red-700" />
    </Transition>
  </main>
</template>

<script>
import authservice from '../service/authservice'
import Input from '../components/input.vue'
import Toaster from '../components/toaster.vue';
export default {
  data() {
    return {
      username: '',
      password: '',
      toast: false,
      message: '',
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
        if (op) {
          document.cookie = `token=${op.data.token}; expires=${now.toUTCString()}`;
          localStorage.setItem("username", op.data.nameuser);
          router.push('/products')
        }
        else {
          this.errormsg = error.response.data.message
        }
      } catch (error) {
        this.message = "Server Error! Please Try Again Later"
        this.toast = true
      }
    }
  }
}
</script>
