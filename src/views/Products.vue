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
            <div>
                <div class="border-b-2 border-green-600 w-full h-12">
                    <button class="px-3 py-2 font-semibold text-xl duration-300 hover:text-green-600"
                        :class="`${!this.which ? `text-green-600` : ``}`"
                        @click="this.which = this.which = false">Products</button>
                    <button class="px-3 py-2 font-semibold text-xl duration-300 hover:text-green-600"
                        :class="`${this.which ? `text-green-600` : ``}`" @click="this.which = true">{{ this.currentab
                        }}</button>
                </div>
                <Suspense>
                    <template #default>
                        <Transition name="first">
                            <First @tab="which = $event" @tabname="currentab = $event" @details="summa = $event"
                                v-if="!this.which" />
                        </Transition>
                    </template>
                    <template #fallback>
                        <img src="https://static.vecteezy.com/system/resources/previews/016/774/561/non_2x/loading-icon-loading-progress-icon-on-transparent-background-free-png.png"
                            class="w-96 mx-auto animate-spin h-64 object-contain" alt="">
                    </template>
                </Suspense>
                <Transition name="second">
                    <Second v-if="this.which" @tabname="currentab = $event" />
                </Transition>
            </div>
        </main>
    </div>
</template>
<script>
import First from '../components/product.vue'
import Second from '../components/second.vue'
import { computed } from 'vue'
export default {
    data() {
        return {
            currentab: 'Add Product',
            which: false,
        }
    },
    methods: {},
    provide() {
        return {
            currentab: computed(() => this.currentab)
        }
    }
}
</script>

<style scoped>
.first-enter-active {
    transition: opacity 1s ease;
}

.first-enter-from,
.first-leave-to {
    opacity: 0;
}

.second-enter-active {
    transition: opacity 1s ease;
}

.second-enter-from,
.second-leave-to {
    opacity: 0;
}
</style>
