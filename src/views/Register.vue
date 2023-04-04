<script setup>
import router from '../router/index';
</script>
<template>
  <main>
    <form class="shadow-orange-400 ring-2 rounded-lg ring-orange-500 flex flex-col justify-evenly items-center w-1/3 h-[450px] mt-52 m-auto shadow-xl" @submit.prevent="submitclick">
      <h1 class="px-8 text-lg bg-gradient-to-r from-orange-400 to-red-400 font-mono py-2 rounded-full h-fit select-none">Please Fill
        Your Details</h1>
      <Input v-model="username" placeholder="Enter Username" />
      <Input v-model="email" type="email" placeholder="Enter Email" />
      <Input v-model="password" placeholder="Enter Password" />
      <section class="flex items-center ">
        <input required type="checkbox" class="accent-orange-500">
        <span class="text-lg">&nbsp;I agree to the terms and condition</span>
      </section>
      <span v-if="errormsg != ''" class="font-semibold text-red-600">{{ this.errormsg }}</span>
      <button class="w-96 bg-orange-500 py-2 rounded-3xl hover:bg-orange-600" type="submit">Sign Up</button>
      <RouterLink to="/" class="text-blue-500 font-semibold"> <span class="text-black cursor-text">Already have an
          account?&nbsp;</span>Log In</RouterLink>
    </form>
  </main>
</template>

<script>
import authservice from '../service/axios_config'
import Input from '../components/input.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errormsg: ''
    }
  },
  methods: {
    async submitclick() {
      const data = {
        username: this.username,
        password: this.password,
        email: this.email,
        mobile: 9876543210
      }
      try {
        const op = await authservice.register(data);
        if (op.data.status) {
          router.push("/")
        }
      } catch (error) {
        this.errormsg = error.response.data.errorMessage
      }
    }
  }
}
</script>
