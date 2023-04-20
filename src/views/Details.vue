<script setup>
import { useRoute } from 'vue-router'
import { store } from '../store/store';
import Sidebar from '../components/Sidebar.vue'

import Header from '../components/header.vue'
import { ref } from 'vue';
let count = ref(0)

const route = useRoute();
const { id } = route.params
fetch(`http://localhost:2000/details/${id}`).then((response) => response.json())
    .then((data) => {
        store.details = data
        store.image = data.productImages[0]
    })
    .catch((error) => {
        console.error("error:", error);
    });
</script>
<template>
    <div class="flex">
        <section>
            <Sidebar v-if="store.open" />
        </section>
        <main class="flex-grow">
            <Header />
            <main class="w-full h-[725px]">
                <div class="flex lg:flex-row flex-col w-full lg:py-10 py-2 h-full">
                    <section class="flex flex-row lg:w-1/2 h-3/4 w-full justify-between">
                        <div class="flex flex-col w-20 gap-4 ml-4 h-fit border-collapse border-2">
                            <img v-for="item in store.details.productImages" class="cursor-pointer p-1"
                                @click="store.image = item" :src="`https://unipick-ui.s3.ap-south-1.amazonaws.com/${item}`"
                                alt="">
                        </div>
                        <div class="h-full grow bg-cover bg-repeat overflow-hidden">
                            <img class="h-5/6 mx-auto object-contain hover:scale-125 cursor-zoom-in duration-300"
                                :src="`https://unipick-ui.s3.ap-south-1.amazonaws.com/${store.image}`" alt="">
                        </div>
                    </section>
                    <div class="grow flex flex-col lg:gap-4 gap-2 lg:px-0 px-2">
                        <h2 class="underline">{{ store.details.brandName }}</h2>
                        <h1 class="lg:text-2xl text-lg font-serif">{{ store.details.productName }}<span
                                class="lg:text-xs text-base">&nbsp;(Only {{
                                    store.details?.productVariant[0]?.quantity }} left over.)</span></h1>
                        <section class="flex gap-4">
                            <h3 v-for="item in store.details.productTags" class="lg:text-base text-[0.57rem]">
                                <strong>#</strong>{{ item.tagsName }}</h3>
                        </section>
                        <div class="flex w-32">
                            <button :disabled="count==0" @click="count--"
                                class="text-2xl grow border-l-2 border-t-2 border-b-2 rounded-l-full cursor-pointer">-</button>
                            <h3 class="grow border-t-2 border-b-2 rounded text-center text-2xl select-none">{{ count }}</h3>
                            <button @click="count++"
                                class="text-2xl grow border-r-2 border-t-2 border-b-2 rounded-r-full cursor-pointer">+</button>
                        </div>
                        <h2 class="lg:text-2xl text-xl font-semibold">${{ store.details.productVariant[0].price }}</h2>
                        <span class="text-sm">Local tax included (where applicable)</span>
                        <h1 class="inline-flex text-base items-center gap-1"><img src="../assets/truck.webp" class="h-6"
                                alt="">Order
                            within 1 hour to get it by Mar 24</h1>
                        <h2 class="font-semibold">Shipping charges will be calculated on checkout</h2>
                        <button class="w-full h-14 bg-yellow-300 rounded-full font-bold">Add to Collection</button>
                        <button class="w-full h-14 shadow-2xl rounded-full font-bold">Add to Collection</button>
                        <button
                            class="outline-1 outline rounded-md px-10 py-2 text-lg font-semibold hover:bg-yellow-400 outline-black/30 ">Write
                            a product review
                        </button>
                    </div>
                </div>
            </main>
        </main>
</div></template>