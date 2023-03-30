<script setup>
import { useRoute } from 'vue-router'
import { store } from '../store/store';
import Header from '../components/header.vue'
import { ref } from 'vue';
let count = ref(0)

const route = useRoute();
const { id } = route.params
console.log(id);
fetch(`http://localhost:2000/details/${id}`).then((response) => response.json())
    .then((data) => {
        // products = data
        store.details = data
        store.image = data.productImages[0]
    })
    .catch((error) => {
        console.error("error:", error);
    });
</script>
<template>
    <Header/>
        <div class="flex w-11/12 mx-auto h-[500px] my-10">
            <div class="flex flex-col w-20 gap-2">
                <img v-for="item in store.details.productImages" class="cursor-pointer" @click="store.image = item"
                    :src="`https://unipick-ui.s3.ap-south-1.amazonaws.com/${item}`" alt="">
            </div>
            <div class="h-full w-3/5 bg-cover bg-repeat overflow-hidden">
                <img class="h-full mx-auto hover:scale-125 cursor-zoom-in duration-300"
                    :src="`https://unipick-ui.s3.ap-south-1.amazonaws.com/${store.image}`" alt="">
            </div>
            <div class="grow flex flex-col justify-around">
                <h2 class="underline">{{ store.details.brandName }}</h2>
                <h1 class="text-2xl font-serif">{{ store.details.productName }}<span class="text-base">&nbsp;(Only {{
                    store.details?.productVariant[0]?.quantity }} left over.)</span></h1>
                <section class="flex justify-around">
                    <h3 v-for="item in store.details.productTags">#{{ item.tagsName }}</h3>
                </section>
                <div class=" flex w-32">
                    <button @click="count--"
                        class="text-2xl grow border-l-2 border-t-2 border-b-2 rounded-l-full cursor-pointer">-</button>
                    <h3 class="grow border-t-2 border-b-2 rounded text-center text-2xl select-none">{{ count }}</h3>
                    <button @click="count++"
                        class="text-2xl grow border-r-2 border-t-2 border-b-2 rounded-r-full cursor-pointer">+</button>
                </div>
                <h2 class="text-3xl font-semibold">${{ store.details.productVariant[0].price }}</h2>
                <span class="text-sm">Local tax included (where applicable)</span>
                <h1 class="inline-flex text-base items-center gap-1"><img src="../assets/truck.webp" class="h-6"
                        alt="">Order within 1 hour to get it by Mar 24</h1>
                <h2 class="font-semibold">Shipping charges will be calculated on checkout</h2>
                <button class="w-full h-14 bg-yellow-300 rounded-full font-bold">Add to Collection</button>
                <button class="w-full h-14 shadow-2xl rounded-full font-bold">Add to Collection</button>
            </div>
        </div>
        <button
            class="outline-1 outline rounded-md px-10 py-2 text-lg font-semibold hover:bg-yellow-400 outline-black/30 ">Write
            a product review</button>
</template>