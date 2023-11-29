<template>
    <div style="height: calc(100vh - 64px);display: grid;place-items: center;">
        <form class="flex"
            style="flex-direction: column;width: 800px;height: 400px;justify-content: space-around;border: 2px solid rgb(0, 58, 98);padding-inline: 50px;">
            <h2 style="color:rgb(0, 58, 98);margin: 0;text-decoration: underline;">REPORT GENERATION</h2>
            <section style="place-self: start;gap: 20px;display: grid;">
                <div class="flex" style="gap: 5px;">
                    <input type="radio" v-model="selectFilt" value="EINB" name="RG" id="EINB" required>
                    <label for="EINB" style="font-size: larger;font-weight: 600;opacity: 0.8;">ENGINE IDENTIFICATION NUMBER
                        BASED</label>
                </div>
                <div style="width: 100%;padding-left: 75%;">
                    <label style="font-size: large;padding-right: 10px;" for="EIN">EIN:</label>
                    <input type="text" v-model="searchValue" id="EIN" placeholder="Search the EIN">
                </div>
            </section>
            <section style="place-self: start;display: grid;gap: 20px;">
                <div class="flex" style="gap: 5px;">
                    <input type="radio" v-model="selectFilt" value="DB" name="RG" id="DB">
                    <label for="DB" style="font-size: larger;font-weight: 600;opacity: 0.8;">DATE BASED</label>
                </div>
                <div style="gap: 10px;width: 100%;padding-left: 25%;" class="flex">
                    <label style="font-size: large;" for="fromDate">From Date :</label>
                    <input type="date" name="fromDate" id="fromDate">
                    <label style="font-size: large;" for="toDate">End Date :</label>
                    <input type="date" name="toDate" id="toDate">
                </div>
            </section>
            <button type="submit" @click.prevent="reportDownload()">Get Report</button>
        </form>
    </div>
</template>
<script>
import { saveAs } from 'file-saver';
export default {
    data() {
        return {
            selectFilt: "EINB",
            searchValue: "",
            startDate: "",
            endDate: ""
        }
    },
    methods: {
        async reportDownload() {
            try {
                if(this.selectFilt === "EINB" && this.searchValue ===""){
                    return;
                }
                const request =
                    this.selectFilt === "EINB"
                        ? { filterType: "EIN", searchValue: this.searchValue }
                        : { filterType: "DATE", startDate: this.startDate, endDate: this.endDate };

                const response = await useFetch('http://localhost:9600/api/reportDownload', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(request)
                });

                if (response.data?.value?.statusCode === 200) {
                    if (response.data.value.tabledata) {
                        const uint8Array = new Uint8Array(response.data.value.tabledata.data);
                        const blobs = new Blob([uint8Array], {
                            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        });
                        saveAs(blobs, 'report.xlsx');
                    }
                } else {
                    console.error("Error", response.data?.value);
                }
            } catch (error) {
                console.error("Error", error);
            }
        }
    }
}
</script>
<style scoped>
input[type='text'] {
    width: 300px;
    padding: 8px 5px;
}

input[type='date'] {
    width: 150px;
    font-size: large;
    padding: 8px 5px;
}

button {
    width: 150px;
    padding: 15px;
    border: none;
    background-color: rgb(33, 91, 129);
    cursor: pointer;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    font-size: medium;
    transition: all 0.2s ease-in-out;
}

button:hover {
    background-color: rgb(0, 58, 98);
    color: white;
}

.flex {
    display: flex;
    align-items: center;
}
</style>