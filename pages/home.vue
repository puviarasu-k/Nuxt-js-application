<template>
    <div style="height: calc(100vh - 64px);display: grid;place-items: center;">
        <div class="home-parent">
            <h2 class="heading" style="background-color: red;">IMSI 1F - CKD LINE - ENGINE TRACEABILITY SYSTEM</h2>

            <!-- DC NUTRUNNERS -->
            <div class="left-side">
                <h2 class="heading">DC NUTRUNNERS</h2>
                <div style="width: 50%;height: 90%;position: relative;border: 1px solid #dddddd;">
                    <h3 style="background-color:white;color: black;margin: 0;text-align: center;">DC NUT RUNNERS-CORE 3</h3>
                    <section style="display: flex;">
                        <div style="position: relative;flex: 0.3;">
                            <h3 class="heading" style="background-color:white;color: black;border: 1px solid #dddddd;">Image</h3>

                        </div>
                        <div style="position: relative;flex: 0.7;">
                            <h3 class="heading" style="background-color:white;color: black;border: 1px solid #dddddd;">ENGINE NO</h3>

                        </div>
                    </section>
                </div>
                <div style="width: 50%;height: 90%;position: relative;border: 1px solid #dddddd;">
                    <h3 class="heading" style="background-color:white;color: black;">DC NUT RUNNERS-SCOOTERS</h3>
                </div>
            </div>

            <!-- LEAK STATIONS -->
            <div class="right-side">
                <h2 class="heading">LEAK STATIONS</h2>
                <div style="width: 50%;height: 90%;position: relative;border: 1px solid #dddddd;">
                    <h3 class="heading" style="background-color:white;color: black;">LEAK STATION-CORE 3</h3>
                </div>
                <div style="width: 50%;height: 90%;position: relative;border: 1px solid #dddddd;">
                    <h3 class="heading" style="background-color:white;color: black;">LEAK STATIONS-SCOOTER</h3>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.heading {
    margin: 0;
    background-color: #ff3306;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    color: white;
}

.home-parent {
    width: 95%;
    height: 90%;
    position: relative;
    border: 2px solid #dddddd;
    display: grid;
    margin: 0 auto;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
}

.left-side {
    height: 90%;
    width: 95%;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #dddddd;
}

.right-side {
    height: 90%;
    width: 95%;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #dddddd;
}
</style>