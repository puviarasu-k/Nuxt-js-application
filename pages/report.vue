<template>
    <div>
        <div class="mch">
            <div style="position: relative;">
                <label for="machineType" class="over-title">Engine
                    Type</label>
                <select id="machineType" class="mch-type" v-model="machineType">
                    <option :value="'DC'" selected>DC</option>
                    <option :value="'LTM'" selected>LTM</option>
                </select>
            </div>
            <div style="position: relative;">
                <label for="selectedItem" class="over-title">Engine No</label>
                <select id="selectedItem" class="mch-dpd" v-model="selectedItem">
                    <option v-if="selectedItem === ''" :value="''" selected>Choose Engine</option>
                    <option v-for="machine in machineList" :key="machine" :value="machine.Engine_Number">
                        {{ machine.Engine_Number }}
                    </option>
                </select>
            </div>
            <div style="position: relative;">
                <label for="startDate" class="over-title">Start Date</label>
                <input id="startDate" type="date" class="date" v-model="startDate" placeholder="Search EIN Number" />
            </div>
            <div style="position: relative;">
                <label for="endDate" class="over-title">End Date</label>
                <input id="endDate" type="date" class="date" v-model="endDate" placeholder="Search EIN Number" />
            </div>
            <div style="position: relative;">
                <label for="search" class="over-title">EIN Number</label>
                <input id="search" class="search" v-model="searchValue" placeholder="Search EIN Number" />
            </div>
            <div>
                <button class="submit" type="submit" @click.prevent="fetchData()">Submit</button>
            </div>
            <div>
                <button class="clear" type="submit" @click.prevent="clearFilter()">Clear All</button>
            </div>
            <div>
                <button class="downld" type="submit" @click.prevent="reportDownload()">Download</button>
            </div>
        </div>
        <!-- <div class="report-page">
            <form class="flex">
                <h2>REPORT GENERATION</h2>
                <div style="display: grid;background-color: #e7ebee;width: 100%;padding-block: 15px;">
                    <section>
                        <div class="flex" style="gap: 5px;">
                            <input type="radio" v-model="selectFilt" value="EINB" name="RG" id="EINB" required>
                            <label for="EINB" style="font-size: larger;font-weight: 600;opacity: 0.8;">ENGINE IDENTIFICATION
                                NUMBER
                                BASED</label>
                        </div>
                        <div style="width: 100%;padding-left: 150px;">
                            <label style="font-size: large;padding-right: 10px;" for="EIN">EIN:</label>
                            <input type="text" v-model="searchValue" id="EIN" placeholder="Search the EIN">
                        </div>
                    </section>
                    <section>
                        <div class="flex" style="gap: 5px;">
                            <input type="radio" v-model="selectFilt" value="DB" name="RG" id="DB">
                            <label for="DB" style="font-size: larger;font-weight: 600;opacity: 0.8;">DATE BASED</label>
                        </div>
                        <div style="gap: 10px;width: 100%;padding-left: 50px;;" class="flex">
                            <label style="font-size: large;" for="fromDate">From Date :</label>
                            <input type="date" name="fromDate" id="fromDate">
                            <label style="font-size: large;" for="toDate">End Date :</label>
                            <input type="date" name="toDate" id="toDate">
                        </div>
                    </section>
                    <button type="submit" @click.prevent="reportDownload()">Get Report</button>
                </div>
            </form>
        </div> -->
        <div class="tabl">
            <table>
                <tr class="tr-cls">
                    <th v-for="clm in machineColumn" :key="clm">{{ clm }}</th>
                </tr>
                <tr v-for="val in machineValue" :key="val">
                    <td v-for="val in machineValue" :key="val">{{ val }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { saveAs } from 'file-saver';
import { machineDropoList } from '../service/api/machine';
export default {
    data() {
        return {
            selectFilt: "EINB",
            searchValue: "",
            startDate: "",
            endDate: "",
            machineType: "DC",
            selectedItem: "",
            machineList: [],
            search: '',
            machineColumn: ["Engine_Number", "Asset_Code", "Asset_Type", "Asset_Name", "Asset_Make", "Asset_Model", "Spindle_Count", "Line"],
            machineValue: ["ND16E-8219025", "DC08", "DC", "Flywheel-Core 3", "Atlas Copco", "PowerMacs 4000",
                "3", "Core 3"],
        }
    },
    async created() {
        await this.fetchMachineById();
    },
    methods: {
        async reportDownload() {
            try {
                if (this.selectFilt === "EINB" && this.searchValue === "") {
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

                if (response.data?.value.statusCode === 200) {
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
        },
        async fetchMachineById(value) {
            const response = await machineDropoList({ search: value });
            if (response._value.data) {
                this.machineList = response._value.data.dcMachine
            }
        },
        async fetchData() {
            try {
                const response = await machineListDetails({
                    machineType: this.machineType,
                    searchValue: this.searchValue, startDate: this.startDate,
                    endDate: this.endDate, selectedItem: this.selectedItem,
                });
                if (response._value.data) {
                    this.machineList = response._value.data.dcMachine
                    this.machineList = response._value.data.dcMachine
                } else {
                    console.error("Error", response);
                }
            } catch (error) {
                console.error("Error", error);
            }
        },
        clearFilter() {
            this.selectFilt = "EINB";
            this.searchValue = "";
            this.startDate = "";
            this.endDate = "";
            this.machineType = "DC";
            this.selectedItem = "";
            this.search = '';
        }
    }
}
</script>

<style lang="scss">
.mch {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: flex-end;
    margin: 20px;

    .over-title {
        position: absolute;
        top: -8px;
        left: 15px;
        background-color: white;
        font-weight: 900;
    }

    .submit {
        border: 2px solid #00385e;
        padding: 8px 32px;
        border-radius: 20px;
        background: #003960;
        font-size: 15px;
        font-weight: 900;
        color: white;
    }

    .downld {
        border: 2px solid #00c153;
        padding: 8px 32px;
        border-radius: 20px;
        background: #00c153;
        font-size: 15px;
        font-weight: 900;
        color: white;
    }

    .clear {
        border: 2px solid red;
        padding: 8px 12px;
        border-radius: 20px;
        background: red;
        font-size: 15px;
        font-weight: 900;
        color: white;
        width: 100px;
    }

    .search {
        border: 2px solid #00385e;
        padding: 11px 30px;
    }

    .date {
        border: 2px solid #00385e;
        padding: 10px 5px;
    }

    .mch-dpd {
        border: 2px solid #00385e;
        padding: 10px 20px;
    }

    .mch-type {
        border: 2px solid #00385e;
        padding: 10px 30px;
    }
}

.flex {
    display: flex;
    align-items: center;
}

.report-page {
    height: calc(100vh - 64px);
    display: grid;
    place-items: center;

    >form {
        flex-direction: column;
        width: 50%;
        height: 400px;
        justify-content: space-around;
        border: 2px solid rgb(0, 58, 98);

        & section {
            place-self: start;
            display: grid;
            gap: 20px;
            padding: 25px;
        }

        & h2 {
            color: rgb(0, 58, 98);
            margin: 0;
            text-decoration: underline;
        }
    }

    & input[type='text'] {
        width: 300px;
        padding: 8px 5px;
    }

    & input[type='radio'] {
        height: 20px;
        width: 20px;
    }

    & input[type='date'] {
        width: 150px;
        font-size: larger;
        padding: 3px 0px;
    }

    & button {
        width: 150px;
        padding: 15px;
        border: none;
        background-color: rgb(33, 91, 129);
        cursor: pointer;
        place-self: center;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        font-size: medium;
        transition: all 0.2s ease-in-out;
    }

    & button:hover {
        background-color: rgb(0, 58, 98);
        color: white;
    }
}

.tabl {
    margin: 0px 10px 0px 20px;

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        box-shadow: -2px 6px 10px rgba(-40, 30, 10, 5.1);
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        height: 30px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

    .tr-cls {
        background: #003960;
        color: white;
    }
}
</style>