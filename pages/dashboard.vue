<template>
    <div class="main">
        <div class="sub-main1">
            <h2>DC NUTRUNNERS</h2>
            <div class="core">
                <div class="sub-core nsub-core">
                    <h3 class="title">DC NUT RUNNERS-CORE 3</h3>
                    <div class="machine" v-for="(machine, index) in slicedDcMachine('Core 3')" :key="index">
                        <div class="machine-dt machine-dt-pad">
                            <h4 class="sub-title">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                            <img class="img-machine" src="~/assets/machine/ATLAS.png">
                        </div>
                        <div class="machine-lt nmachine-lt">
                            <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <Machine :title="'TOOL1'" :machine="machine" />
                        </div>
                    </div>
                </div>
                <div class=" nsub-core">
                    <h3 class="title">DC NUT RUNNERS-SCOOTERS</h3>
                    <div class="machine" v-for="(machine, index) in slicedDcMachine('Scooter')" :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                            <img class="img-machine" src="~/assets/machine/ATLAS.png">
                        </div>
                        <div class="machine-lt nmachine-lt">
                            <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <Machine :title="'TOOL1'" :machine="machine" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sub-main2">
            <div style="border: 3px solid #000;">
                <h2>Leak Stations</h2>
                <div class="core">
                    <div class="sub-core nsub-core">
                        <h3 class="title">LEAK STATION-CORE 3</h3>
                        <div class="machine" v-for="(machine, index) in slicedLRMMachine('Core-3')" :key="index">
                            <div class="machine-dt">
                                <h4 class="sub-title">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                                <img class="img-machine1" src="~/assets/machine/LEAK.png">
                            </div>
                            <div class="machine-lt nmachine-lt">
                                <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                                <Machine :title="'LEAK TESTER'" :machine="machine" />
                            </div>
                        </div>
                    </div>
                    <div class=" nsub-core">
                        <h3 class="title">DC NUT RUNNERS-SCOOTERS</h3>
                        <div class="machine" v-for="(machine, index) in slicedLRMMachine('Scooter')" :key="index">
                            <div class="machine-dt">
                                <h4 class="sub-title">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                                <img class="img-machine1" src="~/assets/machine/LEAK.png">
                            </div>
                            <div class="machine-lt nmachine-lt">
                                <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                                <Machine :title="'LEAK TESTER'" :machine="machine" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btm-img">
                <div v-if="ltmMachine.length < 8" style="text-align: center;">
                    <img style="max-height: 230px;" src="~/assets/machine/3D_ENGINE.jpg">
                </div>
            </div>
        </div>
        <!-- <div class="sub-main2">
            <h2>Leak Stations</h2>
            <div class="core ">
                <div class="sub-core">
                    <h3 class="title">LEAK STATION-CORE 3</h3>
                    <div class="machine" v-for="(machine, index) in slicedLRMMachine('Core-3')"
                        :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title1 sub-tt-cnt">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                            <img class="img-machine1" src="~/assets/machine/LEAK.png">
                        </div>
                        <div class="machine-lt">
                            <h4 title="ENGINE NO - {{ machine.Engine_Number }}" class="sub-title1">ENGINE NO - {{
                                machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine :title="'LEAK TESTER'" :machine="machine" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <h3 class="title">LEAK STATION-SCOOTERS</h3>
                    <div class="machine"
                        v-for="(machine, index) in slicedLRMMachine('Scooter')"
                        :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title1 sub-tt-cnt">{{ machine.assetDetails.Asset_Name || "" }}</h4>
                            <img class="img-machine1" src="~/assets/machine/LEAK.png">
                        </div>
                        <div class="machine-lt">
                            <h4 class="sub-title1">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine :title="'LEAK TESTER'" :machine="machine" />
                            </div>
                        </div>
                    </div>
                    <div v-if="ltmMachine.length / 2 !== 0" class="machine-3d">
                        <img class="img-machine1" src="~/assets/machine/3D_ENGINE.jpg">
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>

export default {
    data() {
        return {
            isOpen: true,
            dcMachine: [],
            ltmMachine: [],
        }
    },
    created() {
        this.machineListDetails();
    },
    methods: {
        async machineListDetails() {
            try {
                const data = await useFetch('http://localhost:9600/api/machineList', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const response = data?.data?._value;
                if (response && response.statusCode === 200) {
                    if (response.data) {
                        this.dcMachine = response.data.dcMachine
                        this.ltmMachine = response.data.ltmMachine
                    }
                } else {
                    console.log("MachineListDetailsError", response);
                }
            } catch (error) {
                console.log("Catch Error", error);
            }
        },
        slicedDcMachine(lineType) {
            return this.dcMachine.filter(machine => machine.assetDetails.Line === lineType);
        },
        slicedLRMMachine(lineType) {
            return this.ltmMachine.filter(machine => machine.assetDetails.Line === lineType);
        },
    },
}
</script>
<style scoped>
.main {
    display: flex;
    margin: 5px;
    gap: 2px;
    font-weight: 900;
}

.sub-main1 {
    width: 100%;
    border: 3px solid #000;
}

.sub-main2 {
    width: 46%;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.core {
    display: flex;
}

.sub-core {
    margin-right: 2px;
}

.machine {
    display: flex;
    justify-content: space-around;
}

.machine-dt {
    text-align: center;
    margin-right: 2px;
}

.machine-dt-pad {
    width: 25%;
}

.machine-lt {
    text-align: center;
}

.machine-3d {
    text-align: center;
    margin-top: 10px;
}

.img-machine {
    width: 80px;
    padding: 5px;
    box-shadow: -2px 6px 10px rgba(-40, 30, 10, 5.1);
    margin: 8px 0px;
}

.img-machine1 {
    padding: 0px;
    margin-top: 10px;
    width: 80px;
    box-shadow: -2px 6px 10px rgba(-40, 30, 10, 5.1);
    margin: 7px;
}

h2 {
    background-color: #003960;
    text-align: center;
    padding: 5px;
    color: #fff;
    margin: 0px;
    font-size: 16px;
}

p {
    margin: 0px;
    padding: 0px;
}

.title {
    text-align: center;
    padding: 5px;
    margin: 5px 0px;
    background: #00385e;
    color: white;
    font-size: 14px;
}

.sub-title {
    background-color: #003960;
    text-align: center;
    color: #fff;
    padding: 5px;
    margin: 0px;
    font-weight: 900;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
}

.sub-title1 {
    background-color: #003960;
    text-align: center;
    color: #fff;
    padding: 0px 5px 10px 5px;
    margin: 0px;
    font-weight: 900;
    height: 20px;
    justify-content: center;
    align-items: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
}

.sub-tt-cnt {
    padding: 5px;
    display: flex;
}

/* .spd-ls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0fr));
    grid-gap: 8px;
    justify-items: flex-start;
} */

.nsub-core {
    width: 50%;
}

.nmachine-lt {
    width: 100%;
}

.btm-img {
    border: 3px solid #000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>