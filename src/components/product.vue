<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <main class="flex w-full h-full` flex-col gap-4 p-4">
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
                <tr v-for="item in data" class="border-2 hover:bg-[#d8e7f3]">
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
                                @click="deletemethod(item.productUrlId)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Transition>
            <div v-show="this.toast"
                class="fixed z-50 duration-500 inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
                <div class="max-w-sm w-full bg-green-100 shadow-lg rounded-lg pointer-events-auto">
                    <div class="rounded-lg shadow-xs overflow-hidden">
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div class="ml-3 w-0 flex-1 pt-0.5">
                                    <p class="text-sm leading-5 font-medium text-green-800">
                                        Success!
                                    </p>
                                    <p class="mt-1 text-lg font-semibold leading-5 text-green-700">
                                        {{ message }}
                                    </p>
                                </div>
                                <div class="ml-4 flex-shrink-0 flex">
                                    <button @click="hide"
                                        class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M18.293 3.293a1 1 0 0 0-1.414 0L10 8.586 4.707 3.293a1 1 0 0 0-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 1 0 1.414 1.414L10 11.414l5.293 5.293a1 1 0 0 0 1.414-1.414L11.414 10l5.293-5.293a1 1 0 0 0 0-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <nav class="flex justify-end items-center">
            <div>
                <span class="mr-5 select-none font-semibold text-xl border-2 p-2 shadow-2xl">Page {{ this.pageno+1 }} of {{ this.count }}</span>
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
import axiosClient from '../axios_config'
import route from '../router/index'
export default {
    data() {
        return {
            data: [],
            pageno: 0,
            count: 0,
            actionon: '',
            toast: false,
            message: '',
        }
    },
    methods: {
        actionmethod(item) {
            this.actionon = this.actionon != '' ? '' : item._id
        },
        deletemethod(item) {
            fetch("http://localhost:2000/deleteproducts/" + item).then((response) => response.json()).then((data) => {
                console.log(data);
            })
            const data1 = {
                no: this.pageno,
                sortBy: 1,
                min: 0,
                max: 100000
            }

            fetch("http://localhost:2000/getallproducts", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data1)
            }).then((response) => response.json())
                .then((data) => {
                    this.data = data.data
                    this.count = data.count / 10
                })
                .catch((error) => {
                    console.error("error:", error);
                });

            this.message = "Product Deleted Succesfully"
            this.actionon = ''
            this.toast = true
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
        pageno() {
            const data1 = {
                no: this.pageno,
                sortBy: 1,
                min: 0,
                max: 100000
            }
            axiosClient.post('/getallproducts', JSON.stringify(data1)).then((response) => {
            this.data = response.data.data
            this.count = Math.round(response.data.count)
        }).catch(function (error) {
            route.push('/servererror')
        })
        },
        toast() {
            setTimeout(() => {
                this.toast = false
            }, 2000)
        }
    },
    mounted() {
        const data1 = {
            no: this.pageno,
            sortBy: 1,
            min: 0,
            max: 100000
        }
        //axios
        axiosClient.post('/getallproducts', JSON.stringify(data1)).then((response) => {
            this.data = response.data.data
            this.count = response.data.count
        }).catch(function (error) {
            route.push('/servererror')
        })
    }
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
}</style>