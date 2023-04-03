<script setup>
import router from '../router/index';
</script>
<template>
  <main>
    <form class="flex flex-col justify-around items-center w-1/3 h-[400px] mt-52 m-auto" @submit.prevent="submitclick">
      <h1 class="px-8 text-lg bg-gradient-to-r from-orange-400 to-red-400 font-mono py-2 rounded-full h-fit">Please Fill
        Your Details</h1>
      <input placeholder="Enter Username" class="w-96 h-10 pl-2 outline-none border-b-[1px] border-black/60"
        v-model="username" required type="text">
      <input placeholder="Enter Email" class="w-96 h-10 pl-2 outline-none border-b-[1px] border-black/60" v-model="email"
        required type="email">
      <input placeholder="Enter Password" class="w-96 h-10 pl-2 outline-none border-b-[1px] border-black/60"
        v-model="password" required type="Password">
      <section class="flex items-center ">
        <input required type="checkbox">
        <span class="text-lg">&nbsp;I agree to the terms and condition</span>
      </section>
      <span v-if="errormsg != ''" class="font-semibold text-red-600">{{ this.errormsg }}</span>
      <button class="w-96 bg-orange-500 py-2 rounded-3xl hover:bg-orange-600" type="submit">Sign Up</button>
      <RouterLink to="/" class="text-blue-500 font-semibold"> <span class="text-black cursor-text">Already have an
          account&nbsp;</span>Log In</RouterLink>
    </form>
  </main>
</template>

<script>
import authservice from '../service/axios_config'
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
