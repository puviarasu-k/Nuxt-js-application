<template>
    <div :class="`main-layout ${isOpen ? 'active' : ''}`">
        <NuxtLayout :name="'sidebar'" />
        <div>
            <header
                style="height: 50px;background-color: #003a62;display: flex;align-items: center;justify-content: space-between;">
                <section style="display: flex;align-items: center;">
                    <button style="cursor: pointer;background: transparent;;border: none;transition: all 0.3s ease-in-out;"
                        :style="isOpen ? '' : 'transform: rotate(180deg)'" type="button" @click="isOpen = !isOpen">
                        <img class="img-machines" src="~/assets/svg/menu.svg">
                    </button>
                    <NuxtLink style="color: white;text-decoration: none; font-size: 2em;font-weight: bold;" to="/dashboard">
                        DatAct</NuxtLink>
                </section>
                <div>
                    <h2 class="title-pj">Part Process Data Traceability System</h2>
                </div>
                <div style="display: flex;align-items: center;gap: 10px;">
                    <h2 style="color: white;">DatACT Admin</h2>
                    <div class="profile">
                        <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 45.53 45.53"
                            xml:space="preserve" stroke="#ffffff" stroke-width="0.00045531999999999994">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <section class="profile-dropdown">
                            <!-- <button class="dorpdownbutton"
                                style="width: 100%;border: none;padding-block: 10px;font-size: medium;background-color: transparent;cursor: pointer;border-bottom: 1px solid rgb(216, 212, 212);"
                                type="button">Change Password</button> -->
                            <button class="dorpdownbutton"
                                style="width: 100%;border: none;padding-block: 10px;font-size: medium;background-color: transparent;cursor: pointer;"
                                type="button">
                                <NuxtLink class="dorpdownbutton" @click="logout"
                                    style="color: black;text-decoration: none;display: block;width: 100%;">Log Out
                                </NuxtLink>
                            </button>
                        </section>
                    </div>
                </div>
            </header>
            <slot />
        </div>
    </div>
</template>

<script>
import nuxtStorage from 'nuxt-storage';

export default {
    data() {
        return {
            isOpen: true,
        }
    },
    methods:{
        logout(){
            nuxtStorage.localStorage.removeItem("user");
            nuxtStorage.localStorage.setData("path", "/");
            navigateTo('/');
        }
    }
}
</script>
<style>
.title-pj {
    color: white;
    font-weight: 900;
}

.profile {
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    padding-right: 15px;
}

.dorpdownbutton:hover {
    background-color: #4385f5 !important;
    color: white !important;
}

.profile-dropdown {
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    width: 120px;
    display: none;
    border: 1px solid rgb(216, 212, 212);
    background-color: white;
    height: 35px;
    right: 5%;
    border-radius: 5px;
    top: 100%;
}

.profile:hover .profile-dropdown {
    display: flex;
}
</style>