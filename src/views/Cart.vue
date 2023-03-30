<script setup>
import Sidebar from '../components/Sidebar.vue'
import { store } from '../store/store'
import Header from '../components/header.vue'
</script>
<template>
    <div class="flex">
        <section>
            <Sidebar v-if="store.open" />
        </section>
        <main class="flex-grow">
            <Header />
            <h1 class="text-4xl text-center">carts</h1>
        </main>
    </div>
</template>