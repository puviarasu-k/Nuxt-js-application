<script setup>
const machines = [
    {
        sno: 1,
        station: "CYLINDER HEAD TIGHTENING MACHINE",
        model: "KWP/K24",
        specification: "16~20",
        unit: "Nm",
    },
    {
        sno: 2,
        station: "LEAK TESTING MACHINE",
        model: "KWP/K24",
        specification: "-200~+200",
        unit: "kPa",
    },
    {
        sno: 3,
        station: "ACG-FLYWHEEL TIGHTENING MACHINE",
        model: "KWP/K24",
        specification: "34-44",
        unit: "Nm",
    },
    {
        sno: 4,
        station: "DRIVE FACE NUT TIGHTENING MACHINE",
        model: "KWP/K24",
        specification: "88-98",
        unit: "Nm",
    },
    {
        sno: 5,
        station: "OIL FILLING MACHINE (ENGINE OIL)",
        model: "KWP/K24",
        specification: "700-800",
        unit: "ml",
    },
    {
        sno: 6,
        station: "OIL FILLING MACHINE (MISSION OIL)",
        model: "KWP/K24",
        specification: "100-120",
        unit: "ml",
    },
];

</script>
<template>
    <div style="height: calc(100vh - 64px);display: grid;place-items: center;">
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Station</th>
                    <th>Model</th>
                    <th>Specification</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in machines">
                    <td>{{ item.sno }}</td>
                    <td>{{ item.station }}</td>
                    <td>{{ item.model }}</td>
                    <td>{{ item.specification }}</td>
                    <td>{{ item.unit }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
    border-radius: 10px;
    box-shadow: 5px 25px 25px rgba(0, 0, 0, 0.2);
}

td {

    text-align: justify;
    padding: 25px;
}

th {
    background-color: #003a62;
    color: white;
    text-align: justify;
    padding: 20px;
}
</style>