<template>
    <div class="main">
        <div class="sub-main1 bdr-rt">
            <h2>DC NUTRUNNERS</h2>
            <div class="core">
                <div class="sub-core nsub-core">
                    <h3 class="title">DC NUT RUNNERS-CORE 3</h3>
                    <div class="machine bdr-rt bdr-tp" v-for="(machine, index) in slicedDcMachine(0, 4)" :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title">Flywheel-Core 3</h4>
                            <img class="img-machine" src="~/assets/image/dc_machine.png">
                        </div>
                        <div class="machine-lt nmachine-lt">
                            <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine v-if="machine.Torque_1" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_2 &&( index ===1 || index ===3)" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_1 && index ===3" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_2 && index ===3" :machine="machineInfo(machine)" />
                                <!-- <Machine v-if="machine.Torque_3" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_4" :machine="machineInfo(machine)" /> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-core nsub-core">
                    <h3 class="title bdr-bt">DC NUT RUNNERS-SCOOTERS</h3>
                    <div class="machine bdr-bt" v-for="(machine, index) in slicedDcMachine(5, dcMachine.length)"
                        :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title">Clutch Pulley-SC</h4>
                            <img class="img-machine" src="~/assets/image/dc_machine.png">
                        </div>
                        <div class="machine-lt nmachine-lt">
                            <h4 class="sub-title">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine v-if="machine.Torque_1" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_2 && index ===2" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_1 && index ===2" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_2 && index ===2" :machine="machineInfo(machine)" />
                                <!-- <Machine v-if="machine.Torque_3" :machine="machineInfo(machine)" />
                                <Machine v-if="machine.Torque_4" :machine="machineInfo(machine)" /> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sub-main2">
            <h2>Leak Stations</h2>
            <div class="core ">
                <div class="sub-core">
                    <h3 class="title bdr-bt">LEAK STATION-CORE 3</h3>
                    <div class="machine bdr-bt" v-for="(machine, index) in slicedDcMachine(0, 2)" :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title1 sub-tt-cnt">Main Line</h4>
                            <img class="img-machine1" src="~/assets/image/ltm_machine.png">
                        </div>
                        <div class="machine-lt">
                            <h4 title="ENGINE NO - {{ machine.Engine_Number }}" class="sub-title1">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine v-if="machine.Torque_1" :machine="machineInfo(machine)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-core">
                    <h3 class="title bdr-bt">LEAK STATION-SCOOTERS</h3>
                    <div class="machine bdr-lft bdr-bt" v-for="(machine, index) in slicedDcMachine(0, 3)" :key="index">
                        <div class="machine-dt">
                            <h4 class="sub-title1 sub-tt-cnt">Main Line</h4>
                            <img class="img-machine1" src="~/assets/image/ltm_machine.png">
                        </div>
                        <div class="machine-lt">
                            <h4 class="sub-title1">ENGINE NO - {{ machine.Engine_Number }}</h4>
                            <div class="spd-ls">
                                <Machine v-if="machine.Torque_1" :machine="machineInfo(machine)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { machineList } from '../service/api/machine';

export default {
    data() {
        return {
            isOpen: true,
            dcMachine: [],
            ltmMachine: [],
        }
    },
    async created() {
        await this.machineListDetails();
    },
    mounted() {
        this.machineListDetails();
    },
    methods: {
        async machineListDetails() {
            try {
                const response = await machineList();
                if (response?.value?.statusCode === 200) {
                    if (response.value.data) {
                        this.dcMachine = response.value.data.dcMachine
                        this.ltmMachine = response.value.data.ltmMachine
                    }
                } else {
                    console.log("MachineListDetailsError", response?.data?.value);
                }
            } catch (error) {
                console.error("Catch Error", error);
            }
        },
        slicedDcMachine(start, end) {
            return this.dcMachine.slice(start, end);
        },
        slicedLRMMachine(start, end) {
            return this.ltmMachine.slice(start, end);
        },
        machineInfo(machine) {
            let info = {};
            if (machine) {
                info.status_1 = machine.Status_1;
                info.status_2 = machine.Status_2;
                info.ct = machine.CT;
            }
            if (machine.Torque_1) {
                info.torque = machine.Torque_1;
                info.angle = machine.Angle_1;
            } else if (machine.Torque_2) {
                info.torque = machine.Torque_2;
                info.angle = machine.Angle_2;
            } else if (machine.Torque_3) {
                info.torque = machine.Torque_3;
                info.angle = machine.Angle_3;
            } else if (machine.Torque_4) {
                info.torque = machine.Torque_4;
                info.angle = machine.Angle_4;
            }
            return info
        }
    },
}
</script>
<style scoped>
.main {
    display: flex;
    /* justify-content: space-evenly; */
    margin: 5px;
    border-top: 2px solid #00385e;
    border-left: 2px solid #00385e;
    border-right: 2px solid #00385e;
}

.sub-main1 {
    width: 100%;
    border-bottom: 2px solid #00385e;
}

.sub-main2 {
    /* width: 100%; */
    border-bottom: 2px solid #00385e;
}

.core {
    display: flex;
}

/* .sub-core {
    width: 50%;
} */

.machine {
    display: flex;
    justify-content: space-around;
}

.machine-dt {
    text-align: center;
    /* width: 30%; */
}

.machine-lt {
    text-align: center;
    /* width: 70%; */
}

.img-machine {
    width: 90px;
    padding: 5px;
    box-shadow: -2px 6px 10px rgba(-40, 30, 10, 5.1);
    margin: 5px;
    margin-top: 15px;
}

.img-machine1 {
    width: 90px;
    padding: 0px;
    box-shadow: -2px 6px 10px rgba(-40, 30, 10, 5.1);
    margin: 5px;
    margin-top: 15px;
}

h2 {
    background-color: #ff3306;
    text-align: center;
    padding: 5px;
    color: #fff;
    margin: 0px;
}

p {
    margin: 0px;
    padding: 0px;
}

.title {
    text-align: center;
    padding: 5px;
    margin: 0px;
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

.sub-tt-cnt{
    padding: 5px;
}

.spd-ls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 5px;
    justify-items: flex-start;
}

.bdr-tp {
    border-top: 2px solid #00385e;
}

.bdr-rt {
    border-right: 2px solid #00385e;
}

.bdr-lft {
    border-left: 2px solid #00385e;
}

.bdr-bt {
    border-bottom: 2px solid #00385e;
}

.nsub-core{
    width: 50%;
}
.nmachine-lt{
    width: 100%;
}
</style>