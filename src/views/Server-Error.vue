<script setup>
let route = window.history.state.back;
</script>
<template>
    <div class="">
        <RouterLink :to=route
            class="font-semibold text-lg right-52 my-10 hover:bg-green-500 fixed text-center shadow-2xl bg-green-400 hover:scale-105 duration-200 shadow-black/80 px-4 rounded-2xl py-3">
            Go Back</RouterLink>
        <img src="../assets/How-to-Fix-500-Internal-Server-Error.png" alt="Server Error" class="object-cover h-screen">
    </div>
</template>
<!-- <script>
import router from '../router/index'
export default {
    unmounted() {
        window.BeforeUnloadEvent(router.push(this.$router.options.history.state.back))
    },
}
</script> -->