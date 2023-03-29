<script setup>
import Sidebar from '../components/Sidebar.vue'
import { store } from '../store/store'
import Products from '../components/products.vue'
</script>
<template>
    <div class="flex">
        <section>
            <Sidebar v-if="open" />
        </section>
        <main class="flex-grow">
            <header class="w-full h-16 bg-slate-700 flex justify-between items-center">
                <section class="flex items-center">
                    <svg @click="this.open = !this.open" :class="`stroke-white hover:scale-110 cursor-pointer `"
                        width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17Z"
                                fill="#000000"></path>
                        </g>
                    </svg>
                    <!-- <h1 class="text-3xl font-serif text-orange-400">Test</h1> -->
                </section>
                <nav class="text-2xl space-x-10 text-white flex mr-6">
                    <RouterLink to="">Home</RouterLink>
                    <RouterLink to="">About</RouterLink>
                    <section class="relative group">
                        <section class="flex items-center gap-3">
                            <img src="../assets/profile-icon-person-user-19.png" class="w-8 cursor-pointer" alt="">
                            <h2 class="font-serif text-3xl cursor-pointer">{{ store.username }}</h2>
                        </section>
                        <div class="absolute hidden group-hover:block w-44 h-32 bg-slate-600 right-0 rounded-lg top-10">
                            <section class="flex flex-col">
                                <button class="flex justify-center mt-5 hover:scale-105 gap-2"><svg width="30px"
                                        height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z"
                                                stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </path>
                                            <path
                                                d="M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43C9.9107 22.27 14.4207 22.27 17.1707 20.43C19.5907 18.81 19.5907 16.17 17.1707 14.56C14.4307 12.73 9.9207 12.73 7.1607 14.56Z"
                                                stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </path>
                                        </g>
                                    </svg>Profile</button>
                                <RouterLink to="/" class="flex justify-center mt-5 hover:scale-105 gap-2"><svg
                                        fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" id="Outlined"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title></title>
                                            <g id="Fill">
                                                <path
                                                    d="M25,2H16V4h9a1,1,0,0,1,1,1V27a1,1,0,0,1-1,1H16v2h9a3,3,0,0,0,3-3V5A3,3,0,0,0,25,2Z">
                                                </path>
                                                <path
                                                    d="M21.58,17V15H7l4-4L9.58,9.55l-5,5a2,2,0,0,0,0,2.83l5,5L11,21,7,17Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>Log out</RouterLink>
                            </section>
                        </div>
                    </section>
                </nav>
            </header>
            <Products />
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        submitclick() {
            router.push('/dashboard')
        }
    }
}
</script>