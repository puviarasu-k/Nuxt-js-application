<script setup>
import { store } from '../store/store'
</script>
<template>
    <div id="favDialog" class="w-full h-[677px] flex justify-center">
        <form method="dialog" class="flex flex-col xl:w-1/2 w-full  items-center justify-around" @submit="submit">
            <h1 class=" px-6 font-semibold text-4xl select-none">
                {{ name }}</h1>
            <div class="flex xl:justify-between justify-evenly w-full items-center">
                <label class="text-xl font-semibold w-40">Product Name</label>
                <span class="text-xl font-semibold">:</span>
                <input type="text" required v-model="store.details.productName"
                    class="pl-2 xl:w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Name">
            </div>
            <div class="flex xl:justify-between justify-evenly w-full items-center">
                <label class="text-xl font-semibold w-40">Product Category</label>
                <span class="text-xl font-semibold">:</span>
                <input type="text" required v-model="store.details.category"
                    class="pl-2 xl:w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Category">
            </div>
            <div class="flex xl:justify-between justify-evenly w-full items-center">
                <label class="text-xl font-semibold w-40">Product Amount</label>
                <span class="text-xl font-semibold">:</span>
                <input type="number" required v-model="store.details.productAmount"
                    class="pl-2 xl:w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Amount">
            </div>
            <div class="flex xl:justify-between justify-evenly w-full items-center">
                <label class="text-xl font-semibold w-40">Product Quantity</label>
                <span class="text-xl font-semibold">:</span>
                <input type="number" required v-model="store.details.quantity"
                    class="pl-2 xl:w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Quantity">
            </div>
                <button type="submit"
                    class="rounded-lg active:scale-105 font-semibold px-6 py-2 bg-orange-500 hover:bg-orange-600 ">Submit</button>
            <Transition>
                <Toaster :message="this.message" v-show="this.toast" />
            </Transition>
        </form>
    </div>
</template>

<script>
import authservice from '../service/productservice'
import Toaster from './toaster.vue';
export default {
    data() {
        return {
            toast: false,
            message: '',
            name: this.currentab.value
        }
    },
    inject: [],
    unmounted() {
        this.$emit("tabname", "Add Product");
        store.details.productName = ''
        store.details.productAmount = ''
        store.details.category = ''
        store.details.quantity = ''
        store.details.productUrlId = ''
    },
    inject: ['currentab'],
    methods: {
        async submit() {
            if (this.currentab.value == "Add Product") {
                const data = {
                    productName: store.details.productName,
                    price: store.details.productAmount,
                    category: store.details.category,
                    quantity: store.details.quantity,
                    productUrlId: store.details.productName
                }
                await authservice.addProduct(data)
                store.details.productName = ''
                store.details.productAmount = ''
                store.details.category = ''
                store.details.quantity = ''
                store.details.productUrlId = ''
                this.message = "Product Added Succesfully"
                this.toast = true
            }
            else {
                const data = {
                    productName: store.details.productName,
                    productAmount: store.details.productAmount,
                    category: store.details.category,
                    quantity: store.details.quantity,
                    productUrlId: store.details.productUrlId
                }
                await authservice.editProduct(data)
                store.details.productName = ''
                store.details.productAmount = ''
                store.details.category = ''
                store.details.quantity = ''
                store.details.productUrlId = ''
                this.message = "Product Edited Succesfully"
                this.toast = true
            }
        }
    },
    watch: {
        toast() {
            setTimeout(() => {
                this.toast = false
            }, 3000)
        }
    },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>