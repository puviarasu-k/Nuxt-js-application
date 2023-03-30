<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/header.vue'
import { store } from '../store/store'
</script>
<template>
    <div class="flex">
        <section>
            <Sidebar v-if="store.open" />
        </section>
        <main class="flex-grow">
            <Header />
            <h1 class="text-4xl text-center">Buyers</h1>
        </main>
    </div>
</template>
