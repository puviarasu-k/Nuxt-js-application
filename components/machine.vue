<template>
    <div class="spd">
        <p :style="{ background: machine.status_1==='OK' ? 'green' : 'red' }" class="frt-p">Spindle</p>
        <p class="mid-p">{{machine.torque}}<span>dp</span></p>
        <div class="sts">
            <div style="text-align: start;">
                <p class="spc-rm">Status:<span :style="{ color: machine.status_1==='OK' ? 'green' : 'red' }">{{machine.status_1}}</span></p>
            </div>
            <div>
                <p class="spc-rm">CT:{{machine.ct}}</p>
            </div>
        </div>
        <p class="mid-p">{{machine.angle}}<span>dp</span></p>
        <div class="sts">
            <div style="text-align: start;">
                <p class="spc-rm">Status:<span :style=" { color: machine.status_2==='OK' ? 'green' : 'red' } ">{{machine.status_2}}</span></p>
            </div>
            <div>
                <p class="spc-rm">CT:{{machine.ct}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['machine'],
    data() {
        return {
            isOpen: true,
        }
    }
}
</script>
<style lang="scss">
.sts {
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    background: #dcd8d8;
    gap: 10px;
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
    padding: 2px 25px;
}

.mid-p {
    padding: 2px;
    background: #d3e15c;
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