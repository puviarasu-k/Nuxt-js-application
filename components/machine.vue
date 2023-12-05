<template>
    <div class="spd-ls">
        <div v-if="machine.Status" class="spd">
            <p :style="{ background: machine.Status === 'OK' ? 'green' : 'red' }" class="frt-p">{{ title }}</p>
            <p class="mid-p">{{ machine.Leak }}<span>Pa</span></p>
            <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status === 'OK' ? 'green' : 'red' }">{{
                        machine.Status }}</span></p>
                </div>
                <!-- <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div> -->
            </div>
            <p class="mid-p">{{ machine.Pressure }}<span>KPa</span></p>
            <!-- <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status === 'OK' ? 'green' : 'red' }">{{
                        machine.Status }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div> -->
        </div>
        <div v-if="machine.Torque_1" class="spd">
            <p :style="{ background: machine.Status_1 === 'OK' ? 'green' : 'red' }" class="frt-p">{{ machine.Torque_2 ?
                'TOOL' : 'TOOL1' }}</p>
            <p class="mid-p">{{ machine.Torque_1 }}<span>Pa</span></p>
            <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_1 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_1 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div>
            <p class="mid-p">{{ machine.Angle_1 }}<span>KPa</span></p>
            <!-- <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_1 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_1 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div> -->
        </div>
        <div v-if="machine.Torque_2" class="spd">
            <p :style="{ background: machine.Status_2 === 'OK' ? 'green' : 'red' }" class="frt-p">TOOL2</p>
            <p class="mid-p">{{ machine.Torque_2 }}<span>Pa</span></p>
            <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_2 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_2 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div>
            <p class="mid-p">{{ machine.Angle_2 }}<span>KPa</span></p>
            <!-- <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_2 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_2 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div> -->
        </div>
        <div v-if="machine.Torque_3" class="spd">
            <p :style="{ background: machine.Status_3 === 'OK' ? 'green' : 'red' }" class="frt-p">TOOL3</p>
            <p class="mid-p">{{ machine.Torque_3 }}<span>Pa</span></p>
            <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_3 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_3 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div>
            <p class="mid-p">{{ machine.Angle_3 }}<span>KPa</span></p>
            <!-- <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_3 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_3 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div> -->
        </div>
        <div v-if="machine.Torque_4" class="spd">
            <p :style="{ background: machine.Status_4 === 'OK' ? 'green' : 'red' }" class="frt-p">TOOL4</p>
            <p class="mid-p">{{ machine.Torque_4 }}<span>Pa</span></p>
            <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_4 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_4 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div>
            <p class="mid-p">{{ machine.Angle_4 }}<span>KPa</span></p>
            <!-- <div class="sts">
                <div style="text-align: start;">
                    <p class="spc-rm">Status:<span :style="{ color: machine.Status_4 === 'OK' ? 'green' : 'red' }">{{
                        machine.Status_4 }}</span></p>
                </div>
                <div>
                    <p class="spc-rm">CT:{{ machine.CT }}</p>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['machine', 'title'],
    data() {
        return {
            isOpen: true,
        }
    }
}
</script>
<style lang="scss">
.spd-ls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 5px;
    justify-items: flex-start;
}

.sts {
    gap: 10px;
    display: flex;
    padding: 2px 7px;
    background: #e1d9d4;
}

.spd {
    margin: 3px 2px;
    box-shadow: -2px 6px 10px rgba(0, 0, 0, 0.1);
}

.frt-p {
    background: #62c207;
    color: white;
    font-weight: 900;
    margin: 0px;
    padding: 1px 10px;
    font-size: 11px;
}

.mid-p {
    padding: 2px;
    background: #fff999;
    font-size: 20px;
    font-weight: 900;
    margin: 0px;

    span {
        font-size: 12px;
    }
}

.lst-p {
    padding: 2px;
    background: #62c207;
}

.spc-rm {
    margin: 0px;
    font-size: 10px;
    font-weight: 900;
}
</style>