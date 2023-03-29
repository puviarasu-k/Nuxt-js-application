<template>
    <div id="favDialog" class="w-full h-[677px] flex justify-center">
        <form method="dialog" class="flex flex-col w-1/2 items-center justify-around" @submit="submit">
            <h1 class=" px-6 font-semibold text-4xl select-none">
                Add Product</h1>
            <div class="flex justify-between w-full items-center">
                <label class="text-xl font-semibold">Product Name&emsp;&emsp;&emsp;&emsp;: </label>
                <input type="text" required v-model="productName"
                    class="pl-2 w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Name">
            </div>
            <div class="flex justify-between w-full items-center">
                <label class="text-xl font-semibold">Product Category&emsp;&emsp;&nbsp;&nbsp;:</label>
                <input type="text" required v-model="category"
                    class="pl-2 w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Category">
            </div>
            <div class="flex justify-between w-full items-center">
                <label class="text-xl font-semibold">Product Amount&emsp;&emsp;&ensp;&ensp;:</label>
                <input type="number" required v-model="productAmount"
                    class="pl-2 w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Amount">
            </div>
            <div class="flex justify-between w-full items-center">
                <label class="text-xl font-semibold">Product Quantity&emsp;&emsp;&emsp;:</label>
                <input type="number" required v-model="quantity"
                    class="pl-2 w-96 h-10 border-solid outline-orange-500 border-[1px] border-orange-500 rounded-md"
                    placeholder="Enter Product Quantity">
            </div>
            <div>
                <button value="cancel"
                    class="rounded-lg active:scale-105 font-semibold ml-5 px-6 py-2 bg-orange-500 hover:bg-orange-600">Cancel</button>
                <button type="submit"
                    class="rounded-lg active:scale-105 font-semibold ml-5 px-6 py-2 bg-orange-500 hover:bg-orange-600 ">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // productName: '',
            // productAmount: Number,
            // category: '',
            // quantity: Number,
        }
    },
    inject: ['productAmount', 'productName', 'category', 'quantity'],
    unmounted() {
        this.$emit("tabname", "Add Product");
    },
    methods: {
        submit() {
            const data = {
                productName: this.productName,
                price: this.productAmount,
                category: this.category,
                quantity: this.quantity,
            }
            fetch("http://localhost:2000/addproducts", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
        }
    }
}
</script>