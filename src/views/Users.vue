<template>
    <main class="flex justify-center flex-col">
        <table class="table-fixed">
            <thead>
                <tr class="border-2">
                    <th class="p-2 border-2">Category</th>
                    <th class="p-2 border-2">Productname</th>
                    <th class="p-2 border-2">Price</th>
                    <th class="p-2 border-2">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" class="border-2">
                    <td class="p-2 border-2">{{ item.categoryName }}</td>
                    <td class="p-2 border-2 truncate w-72 overflow-hidden">
                        <div class="truncate">{{ item.productName }}</div>
                    </td>
                    <td class="p-2 border-2">{{ item.productVariant[0].price }}</td>
                    <td class="p-2 border-2">{{ item.productVariant[0].quantity }} </td>
                </tr>
            </tbody>
        </table>
        <nav>
            <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-110 text-lg" :class="`${1==1?`cursor-not-allowed `:``}`"
                @click="this.pageno--" type="button">Previous</button>&emsp;
            <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-110 text-lg"
                @click="this.pageno++">Next</button>
        </nav>
    </main>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            pageno: 0
        }
    },
    methods: {

    },
    watch: {
        pageno() {
            const data1 = {
                no: this.pageno < 0 ? 0 : this.pageno,
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
                    this.data = data
                })
                .catch((error) => {
                    console.error("error:", error);
                });
        }
    },
    mounted() {
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
                this.data = data
            })
            .catch((error) => {
                console.error("error:", error);
            });
    }
}
</script>