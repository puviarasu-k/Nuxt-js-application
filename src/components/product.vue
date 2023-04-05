<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { store } from '../store/store';

const router = useRouter()
const data1 = {
    no: 0,
    sortBy: 1,
    min: 0,
    max: 100000
}
try {
    const op = await authservice.getAllProducts(data1)
    store.data = op.data.data
    store.count = Math.round(op.data.count / 10)
} catch (error) {
    route.push('/servererror')
}
</script>
<template>
    <main class="flex w-full h-full` flex-col gap-4 p-4">
        <!-- delete pop up -->
        <div class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm" v-if="popup">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-white p-6 rounded-lg shadow-black shadow-2xl ring-2 ring-green-700">
                    <h2 class="text-xl font-bold mb-4">Are you sure you want to delete?</h2>
                    <p class="mb-4">This action cannot be undone.</p>
                    <div class="flex justify-end">
                        <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                            @click="this.popup = !this.popup">Cancel</button>
                        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            @click="deletemethod()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- delete pop up -->
        <table class="table-auto shadow-2xl">
            <thead>
                <tr class="border-2">
                    <th class="p-2 border-2">Category</th>
                    <th class="p-2 border-2">Product Name</th>
                    <th class="p-2 border-2">Price</th>
                    <th class="p-2 border-2">Quantity</th>
                    <th class="p-2 border-2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in store.data" class="border-2 hover:bg-[#d8e7f3]">
                    <td class="p-2 border-2 w-56">{{ item.categoryName }}</td>
                    <td class="p-2 border-2 w-72 text-ellipsis overflow-hidden">{{ item.productName }}</td>
                    <td class="p-2 border-2 w-10">{{ item.productVariant[0].price }}</td>
                    <td class="p-2 border-2 w-10">{{ item.totalQuantity }}</td>
                    <td class="p-2 border-2 w-20 relative">
                        <button @click="actionmethod(item)" class="mx-auto block ">&#9776;</button>
                        <div class="absolute w-28 right-16 h-32 border-2 bg-gray-200 rounded-lg z-10 shadow-2xl border-gray-300"
                            :class="`${this.actionon == item._id ? `block` : `hidden`}`">
                            <button
                                class="font-semibold py-2 w-full rounded-lg hover:bg-gray-500 hover:text-white active:scale-105"
                                @click="router.push(`/details/${item.productUrlId}`)">View</button>
                            <button
                                class="font-semibold py-2 w-full rounded-lg hover:bg-gray-500 hover:text-white active:scale-105"
                                @click="editmethod(item)">Edit</button>
                            <button
                                class="font-semibold py-2 w-full rounded-lg hover:bg-gray-500 hover:text-white active:scale-105"
                                @click="deletepop(item.productUrlId)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Transition>
            <Toaster :message="this.message" v-show="this.toast"/>
        </Transition>
        <nav class="flex justify-end items-center">
            <div>
                <span class="mr-5 select-none font-semibold text-xl border-2 p-2 shadow-2xl">Page {{ this.pageno + 1 }} of
                    {{
                        store.count }}</span>
            </div>
            <div>
                <button @click="this.pageno--" :disabled="this.pageno < 1"
                    class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mr-4 disabled:opacity-50 disabled:cursor-not-allowed">&laquo;
                    Previous</button>
                <button @click="this.pageno++"
                    class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed">Next
                    &raquo;</button>
            </div>
        </nav>
    </main>
</template>
<script>
import { store } from '../store/store';
import authservice from '../service/productservice'
import route from '../router/index'
import Toaster from './toaster.vue';
export default {
    data() {
        return {
            pageno: 0,
            actionon: '',
            toast: false,
            message: '',
            popup: false,
            productUrlId: '',
        }
    },
    methods: {
        actionmethod(item) {
            this.actionon = this.actionon != '' ? '' : item._id
        },
        async deletemethod() {
            await authservice.deleteProducts(this.productUrlId)
            const data1 = {
                no: this.pageno,
                sortBy: 1,
                min: 0,
                max: 100000
            }
            try {
                const op = await authservice.getAllProducts(data1)
                store.data = op.data.data
                store.count = Math.round(op.data.count / 10)
            } catch (error) {
                route.push('/servererror')
            }
            this.popup = false
            this.message = "Product Deleted Succesfully"
            this.actionon = ''
            this.toast = true
        },
        deletepop(id) {
            this.actionon = ''
            this.productUrlId = id
            this.popup = !this.popup
        },
        editmethod(item) {
            store.details.productName = item.productName
            store.details.productAmount = item.productVariant[0].price
            store.details.category = item.categoryName
            store.details.quantity = item.totalQuantity
            store.details.productUrlId = item.productUrlId
            this.$emit("tabname", "Edit Product");
            this.$emit("tab", true);
        }
    },
    watch: {
        async pageno() {
            const data1 = {
                no: this.pageno,
                sortBy: 1,
                min: 0,
                max: 100000
            }
            try {
                const op = await authservice.getAllProducts(data1)
                store.data = op.data.data
                store.count = Math.round(op.data.count / 10)
            } catch (error) {
                route.push('/servererror')
            }
        },
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