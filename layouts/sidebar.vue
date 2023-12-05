<template>
    <div class="sidebar">
        <img class="img-mach" src="~/assets/image/logo.png">
        <div>
        </div>
        <hr style="width: 100%;    margin-top: 0px;" />
        <section style="display: flex;flex-direction: column;gap: 5px;">
            <NuxtLink to="/dashboard" active-class="summa" class="sidebar-button">Dashboard</NuxtLink>
            <!-- <NuxtLink to="/station" active-class="summa" class="sidebar-button">Station</NuxtLink> -->
            <NuxtLink to="/report" active-class="summa" class="sidebar-button">Report</NuxtLink>
        </section>
    </div>
    <slot />
</template>

<style>
.sidebar {
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #b9b1b1;
}

.main-layout.active .sidebar {
    overflow: hidden;
}

.sidebar-button {
    border: none;
    background-color: transparent;
    border-block: 1px solid rgb(0, 58, 98, 0.2);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: large;
    padding-block: 10px;
}

.sidebar-button:hover {
    background-color: rgb(0, 58, 98);
    color: white;
    border-block: 1px solid white;
}

.summa {
    background-color: rgb(0, 58, 98);
    color: white;
    border-block: 1px solid white;
}

.img-mach{
    height: 50px;
}
</style>