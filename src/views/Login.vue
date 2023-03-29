<script setup>
import router from '../router/index'
import { store } from '../store/store'
</script>
<template>
  <main>
    <form class="flex flex-col justify-around items-center w-1/3 h-[400px] mt-52 m-auto" @submit.prevent="submitclick">
      <h1 class="px-8 text-lg bg-gradient-to-r from-orange-400 to-red-400 font-semibold py-2 rounded-full h-fit">Welcome
      </h1>
      <input placeholder="Enter Username" class="w-96 h-10 pl-2 border-solid outline-orange-500 duration-700 transition-all focus:placeholder:-translate-y-3 border-b-[1px] border-black"
        v-model="username" required type="text">
      <input placeholder="Enter Password" class="w-96 h-10 translate-x-2 transform ease-in-out border-solid outline-orange-500 duration-700 delay-700 focus:placeholder:translate-x-20 transition border-b-[1px] border-black"
        v-model="password" required type="Password">
      <section class="flex items-center ">
        <input required type="checkbox">
        <span class="text-lg">&nbsp;I agree to the terms and condition</span>
      </section>
      <span v-if="errormsg != ''" class="font-semibold text-red-600">Username or password is incorrect</span>
      <button class="w-96 bg-orange-500 py-2 rounded-3xl hover:bg-orange-600" type="submit">Log In</button>
      <RouterLink to="/register" class="text-blue-500 font-semibold"> <span class="text-black cursor-text">New
          User?</span> Sign up</RouterLink>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errormsg: ''
    }
  },
  methods: {
    submitclick() {
      const data = {
        username: this.username,
        password: this.password
      }
      fetch("http://localhost:2000/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then((response) => response.json())
        .then((data) => {
          store.update(data.nameuser)
          if (data.nameuser) {
            router.push('/products')
          }
          else {
            this.errormsg = data.message
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  }
}
</script>
