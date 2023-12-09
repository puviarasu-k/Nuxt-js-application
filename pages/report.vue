<template>
    <div>
        <div class="mch">
            <!-- <div style="position: relative">
                <label for="machineType" class="over-title">Asset Type</label>
                <select id="machineType" class="mch-type" v-model="machineType" @change="handleAssertType">
                    <option class="opt-md" :value="'DC'" selected>DC</option>
                    <option class="opt-md" :value="'LTM'" selected>LTM</option>
                </select>
            </div> -->
            <div style="position: relative">
                <label for="selectedItem" class="over-title">Station</label>
                <select id="selectedItem" class="mch-dpd" v-model="selectedItem" @change="fetchMachineData">
                    <option v-if="selectedItem === ''" class="opt-md" :value="''" selected>
                        Choose Station
                    </option>
                    <option class="opt-md" :value="'DC & LTM'" selected>
                        DC & LTM
                    </option>
                    <option class="opt-md" :value="'DC'" selected>
                        DC
                    </option>
                    <option class="opt-md" :value="'LTM'" selected>
                        LTM
                    </option>
                    <option v-for="machine in machineList" :key="machine" class="opt-md" :value="machine.Asset_Name">
                        {{ machine.Asset_Name }}
                    </option>
                </select>
            </div>
            <div style="position: relative">
                <label for="startDate" class="over-title">Start Date</label>
                <input id="startDate" type="date" class="date" v-model="startDate" placeholder="Search EIN Number" />
            </div>
            <div style="position: relative">
                <label for="endDate" class="over-title">End Date</label>
                <input id="endDate" type="date" class="date" v-model="endDate" placeholder="Search EIN Number" />
            </div>
            <div style="margin: -5px 5px;">
                <p> Or </p>
            </div>
            <div style="position: relative">
                <label for="search" class="over-title">Engine Number</label>
                <input id="search" class="search" v-model="searchValue" placeholder="Search Engine Number" />
            </div>
            <div>
                <button class="submit" type="submit" @click.prevent="fetchMachineData()">
                    Search
                </button>
            </div>
            <div>
                <button class="clear" type="submit" @click.prevent="clearFilter()">
                    Clear All
                </button>
            </div>
            <div>
                <button class="downld" type="submit" @click.prevent="reportDownload()">
                    Download
                </button>
            </div>
        </div>
        <div class="tabl" v-if="selectedItem !== 'LTM'">
            <table>
                <tr class="tr-cls">
                    <th v-for="clm in dcMachineColumn" :key="clm">{{ clm }}</th>
                </tr>
                <tr v-for="val in dcMachineValue" :key="val">
                    <td v-for="clm in dcMachineColumn" :key="clm">{{ val[clm] }}</td>
                </tr>
                <tr v-if="dcMachineValue.length === 0">
                    <td>No Records Found</td>
                </tr>
            </table>
        </div>
        <div v-if="ltmMachineValue.length > 0 || selectedItem === 'LTM' || selectedItem === 'DC & LTM'" class="tabl"
            style="margin-top: 15px;">
            <table>
                <tr class="tr-cls">
                    <th v-for="clm in ltmMachineColumn" :key="clm">{{ clm }}</th>
                </tr>
                <tr v-for="val in ltmMachineValue" :key="val">
                    <td v-for="clm in ltmMachineColumn" :key="clm">{{ val[clm] }}</td>
                </tr>
                <tr v-if="ltmMachineValue.length === 0">
                    <td>No Records Found</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import saveAs from "file-saver";
import { machineDropoList, machineListDetails } from "../service/api/machine";
export default {
    data() {
        return {
            searchValue: "",
            startDate: "",
            endDate: "",
            machineType: "DC",
            selectedItem: "",
            machineList: [],
            search: "",
            dcMachineColumn: [
                "Engine_Number",
                "Asset_Code",
                "Asset_Type",
                "Asset_Name",
                "Asset_Make",
                "Asset_Model",
                "Spindle_Count",
                "Line",
            ],
            dcMachineValue: [],
            ltmMachineColumn: [
                "Engine_Number",
                "Asset_Code",
                "Asset_Type",
                "Asset_Name",
                "Asset_Make",
                "Asset_Model",
                "Spindle_Count",
                "Line",
            ],
            ltmMachineValue: [],
        };
    },
    created() {
        this.fetchMachineById("DC");
        this.fetchMachineData();
    },
    methods: {
        async handleAssertType() {
            this.selectedItem = "";
            await this.fetchMachineById(this.machineType);
            await this.fetchMachineData();
        },
        async reportDownload() {
            try {
                const data = await useFetch(
                    "http://localhost:9600/api/reportDownload",
                    {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            machineType: this.machineType,
                            selectedItem: this.selectedItem,
                            startDate: this.startDate,
                            endDate: this.endDate,
                            searchValue: this.searchValue,
                        }),
                    }
                );
                const response = data?.data?._value;
                if (response?.statusCode === 200) {
                    if (response.tabledata) {
                        const uint8Array = new Uint8Array(response.tabledata.data);
                        const blobs = new Blob([uint8Array], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        });
                        saveAs(blobs, "report.xlsx");
                    }
                } else {
                    console.log("ReportDownload Error", response.value.message);
                }
            } catch (error) {
                console.log("Catch Error", error);
            }
        },
        async fetchMachineById(value) {
            const data = await useFetch("http://localhost:9600/api/machineDropList", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ machineType: value }),
            });
            const response = data?.data?._value;
            if (response && response.statusCode === 200) {
                if (response.data) {
                    this.machineList = response.data;
                }
            } else {
                console.log("FetchMachineById", response);
            }
        },
        async fetchMachineData() {
            try {
                const data = await useFetch(
                    "http://localhost:9600/api/machineListDetails",
                    {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            machineType: this.machineType,
                            selectedItem: this.selectedItem,
                            startDate: this.startDate,
                            endDate: this.endDate,
                            searchValue: this.searchValue,
                        }),
                    }
                );
                const response = data?.data?._value;
                if (response && response.statusCode === 200) {
                    if (response.data) {
                        this.dcMachineColumn = response.data.length
                            ? Object.keys(response.data.dcMachine[0])
                            : this.dcMachineColumn;
                        this.dcMachineValue = response.data.dcMachine;
                        this.ltmMachineColumn = response.data.length
                            ? Object.keys(response.data.ltmMachine[0])
                            : this.dcMachineColumn;
                        this.ltmMachineValue = response.data.ltmMachine;
                    }
                } else {
                    console.log("MachineListDetailsError", response);
                }
            } catch (error) {
                console.log("Catch Error", error);
            }
        },
        clearFilter() {
            this.searchValue = "";
            this.startDate = "";
            this.endDate = "";
            this.machineType = "DC";
            this.selectedItem = "";
            this.search = "";
            this.fetchMachineData();
        },
    },
};
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
        font-weight: 600;
        font-size: 14px;
    }

    .submit {
        border: 2px solid #00385e;
        padding: 8px 32px;
        border-radius: 20px;
        background: #003960;
        font-size: 14px;
        font-weight: 900;
        color: white;
    }

    .downld {
        border: 2px solid #00c153;
        padding: 8px 32px;
        border-radius: 20px;
        background: #00c153;
        font-size: 14px;
        font-weight: 900;
        color: white;
    }

    .clear {
        border: 2px solid red;
        padding: 8px 12px;
        border-radius: 20px;
        background: red;
        font-size: 14px;
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

    .opt-md {
        font-size: 14px;
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
