<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const dta = router.currentRoute.value.name
</script>
<template>
    <main class="shadow-2xl bg-gradient-to-b from-slate-700 to-slate-500 relative top-0 h-screen w-48">
        <h2 class="text-3xl font-serif text-orange-400 pt-3  text-center">Test</h2>
        <hr class="my-4">
        <section class="flex flex-col items-center gap-5">
            <section class="flex items-center w-full group cursor-pointer">
                <svg class="w-10" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M2 3H4.5L6.5 17H17C18.1046 17 19 17.8954 19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19M9 5H21.0001L19.0001 11M18 14H6.07141M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                            stroke="#d6d6d6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
                <RouterLink class="text-white text-xl  group-hover:text-orange-300" to="/carts"
                    :class="`${dta == 'carts' ? `text-orange-500` : ``}`">Cart
                </RouterLink>
            </section>
            <section class="flex items-center w-full group cursor-pointer">
                <svg class="w-10" width="20px" height="20px" viewBox="0 0 24 24" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title></title>
                        <g fill="none" fill-rule="evenodd" id="页面-1" stroke="none" stroke-width="1">
                            <g id="导航图标" transform="translate(-325.000000, -80.000000)">
                                <g id="编组" transform="translate(325.000000, 80.000000)">
                                    <polygon fill="#000000" fill-opacity="0.01" fill-rule="nonzero" id="路径"
                                        points="24 0 0 0 0 24 24 24"></polygon>
                                    <polygon id="路径" points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="#d6d6d6"
                                        stroke-linejoin="round" stroke-width="1.5"></polygon>
                                    <line id="路径" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" x1="2" x2="12" y1="7" y2="12"></line>
                                    <line id="路径" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" x1="12" x2="12" y1="22" y2="12"></line>
                                    <line id="路径" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" x1="22" x2="12" y1="7" y2="12"></line>
                                    <line id="路径" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" x1="17" x2="7" y1="4.5" y2="9.5"></line>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <RouterLink :class="`${dta == 'products' ? `text-orange-500` : ``}`"
                    class="text-white text-xl group-hover:text-orange-300" to="/products">Products</RouterLink>
            </section>
            <section class="flex items-center cursor-pointer group w-full">
                <svg class="w-10" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path opacity="0.34"
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="#cfcfcf" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                            stroke="#cfcfcf" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
                <RouterLink :class="`${dta == 'settings' ? `text-orange-500` : ``}`"
                    class="text-white text-xl group-hover:text-orange-300" to="/settings">Settings</RouterLink>
            </section>
            <details class="text-white group text-lg cursor-pointer select-none w-full flex flex-col select-none">
                <summary class=" flex items-center justify-between text-xl">
                    <h1 class="flex items-center hover:text-orange-300"><svg class="w-10" width="20px" height="20px" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="User / User_Square">
                                    <path id="Vector"
                                        d="M17 21C17 18.2386 14.7614 16 12 16C9.23858 16 7 18.2386 7 21M17 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2837 20.7822 19.9074C21 19.48 21 18.921 21 17.8031V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H7M17 21H7M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z"
                                        stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        Users
                    </h1>
                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon w-10 group-open:rotate-180 duration-500" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M512 768l448-512H64z" fill="#ededed"></path>
                        </g>
                    </svg>
                </summary>
                <section
                    class="flex items-center cursor-pointer ml-8 py-1 w-full">
                    <svg fill="#c9c9c9" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100" xml:space="preserve" stroke="#c9c9c9">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <circle cx="58.7" cy="76.7" r="2.2"></circle>
                                <circle cx="69.5" cy="76.7" r="2.2"></circle>
                                <path
                                    d="M37.3,43.1c-1.5-2.4-2.4-5.2-2.4-8.3c0-5.2,2.2-9.6,5.7-12.2c-1.3-2.2-3.5-3.6-6.6-3.6 c-5.1,0-7.9,4.1-7.9,8.8c0,2.6,0.9,4.7,2.6,6.3c1,0.9,1.8,2,1.8,3.3c0,1.2-0.4,2.3-3.3,3.5c-4.1,1.9-7.9,4.2-8,8.1 c0,2.6,1.7,4.4,4.1,4.4h3.8c0.6,0,1.2-0.4,1.5-0.9c1.9-3.3,5.3-5.5,8.2-6.9C37.5,45.1,37.9,43.9,37.3,43.1z">
                                </path>
                                <path
                                    d="M58.4,66.4h13.3c0.4,0,0.8-0.3,0.8-0.7l2.4-8.6c0.2-0.6-0.3-1.1-0.8-1.1H60h-6.4l-0.3-1.3 c-0.2-0.6-0.7-1-1.3-1h-2.2c-0.7,0-1.4,0.6-1.4,1.3c-0.1,0.8,0.6,1.4,1.3,1.4H51l1.2,4l0,0l3,10.3c0.2,0.6,0.7,1,1.3,1h15.6 c0.7,0,1.4-0.6,1.4-1.3c0.1-0.8-0.6-1.4-1.3-1.4H58.4c-0.6,0-1.1-0.4-1.3-0.9V68C56.9,67.2,57.5,66.4,58.4,66.4z">
                                </path>
                                <path
                                    d="M48.4,61.6l-0.4-1.5c-0.9-0.3-1.6-0.8-2.2-1.5c-0.9-1.1-1.4-2.4-1.3-3.8c0.1-2.8,2.6-5,5.4-5H52 c1.8,0,3.4,0.9,4.4,2.3H60h2.1c-1.6-1.1-3.5-2-5.4-2.8c-3.2-1.3-3.6-2.6-3.6-3.9c0-1.3,0.9-2.6,1.9-3.6c1.9-1.7,2.9-4.1,2.9-7 c0-5.2-3.2-9.7-8.8-9.7s-8.8,4.5-8.8,9.7c0,2.8,1.1,5.2,2.9,7c1.1,1,1.9,2.3,1.9,3.6c0,1.3-0.5,2.6-3.6,3.9 c-4.8,1.9-9.2,4.2-9.3,8.5c0,2.8,2,5.3,4.7,5.3h11.8L48.4,61.6z">
                                </path>
                                <path
                                    d="M63.1,34.8c0,3.1-0.8,5.9-2.4,8.3c-0.6,0.9-0.3,2,0.7,2.6c2.8,1.3,6,3.3,7.9,6.4h4.8c1,0,1.9,0.3,2.7,0.9 c1.3-0.7,2.1-2.1,2.1-3.9c-0.1-3.9-3.9-6.3-8-8.2c-2.9-1.2-3.3-2.4-3.3-3.5c0-1.2,0.8-2.4,1.8-3.3c1.7-1.6,2.6-3.7,2.6-6.3 c0-4.8-2.8-8.8-7.9-8.8c-3.1,0-5.3,1.4-6.6,3.6C60.9,25.2,63.1,29.5,63.1,34.8z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <RouterLink :class="`${dta == 'buyer' ? `text-orange-500` : ``}`" class="text-white text-xl hover:text-orange-300" to="/buyer">Buyers</RouterLink>
                </section>
                <section 
                    class="flex items-center  cursor-pointer ml-8 w-full">
                    <svg fill="#cfcfcf" width="35px" height="35px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                        stroke="#cfcfcf">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M51.58,48.51l-.19-.13h0Z"></path>
                            <path
                                d="M45.64,59l1.55-1.8a2,2,0,0,0,.46-1.08l.18-2.29a6.75,6.75,0,0,1,.48-1.93q-1-.61-2.07-1.17l0,0c-.84-.42-1.71-.83-2.59-1.25-3-1.26-3.45-2.53-3.45-3.8A5.18,5.18,0,0,1,42,42.11a9.53,9.53,0,0,0,2.65-6.91c0-5.18-3-9.67-8.29-9.67H35.8c-5.3,0-8.29,4.49-8.29,9.67a9.53,9.53,0,0,0,2.65,6.91A5,5,0,0,1,32,45.68c0,1.27-.35,2.54-3.46,3.8-4.37,2-8.4,3.92-8.63,8.07.23,2.88,2.18,5.06,4.72,5.06H44.05A6.64,6.64,0,0,1,45.64,59Z">
                            </path>
                            <path
                                d="M49.5,35.43a17,17,0,0,1-2.3,8.29,1.81,1.81,0,0,0,.7,2.54c1.12.64,2.33,1.32,3.49,2.12l0,0a6.67,6.67,0,0,1,2.63-.75l2.56-.17a1.29,1.29,0,0,0,.73-.32l2-1.64a6.64,6.64,0,0,1,2.45-1.29A22.55,22.55,0,0,0,57,41.42c-2.65-1.15-3.22-2.18-3.22-3.45a5.74,5.74,0,0,1,1.61-3.23,8,8,0,0,0,2.41-6.11C57.92,24,55.27,20,50.43,20a7.2,7.2,0,0,0-6.22,3.57C47.54,26.1,49.5,30.48,49.5,35.43Z">
                            </path>
                            <path d="M69.74,66a2.35,2.35,0,1,0,2.35,2.35A2.35,2.35,0,0,0,69.74,66Z"></path>
                            <path
                                d="M57.35,56.34a2.35,2.35,0,1,0,2.35,2.35A2.35,2.35,0,0,0,57.35,56.34Zm0,0a2.35,2.35,0,1,0,2.35,2.35A2.35,2.35,0,0,0,57.35,56.34Zm21.69,5L77.26,59.2A3.92,3.92,0,0,1,76.37,57l-.2-2.73A3.5,3.5,0,0,0,73,51l-2.37-.19a5.05,5.05,0,0,1-2.86-1.22L65.94,48a3.52,3.52,0,0,0-4.57,0l-2,1.65a4.59,4.59,0,0,1-2.58,1.06l-2.55.17A3.51,3.51,0,0,0,51,54.05l-.18,2.32a5.15,5.15,0,0,1-1.23,2.89l-1.56,1.81a3.5,3.5,0,0,0,0,4.55l1.7,2a4.25,4.25,0,0,1,1,2.42l.19,2.62A3.5,3.5,0,0,0,54.06,76l2.38.22a4.88,4.88,0,0,1,2.85,1.21L61.1,79a3.54,3.54,0,0,0,4.57,0l2.08-1.74a4.07,4.07,0,0,1,2.31-.93l2.72-.2A3.46,3.46,0,0,0,76,72.93l.21-2.2a5.42,5.42,0,0,1,1.36-3.16l1.45-1.66A3.48,3.48,0,0,0,79,61.33ZM52.87,58.69a4.48,4.48,0,1,1,4.48,4.48A4.49,4.49,0,0,1,52.87,58.69Zm6.51,14.43a.44.44,0,0,1-.3.19H57.65a.38.38,0,0,1-.33-.19.33.33,0,0,1,0-.38l10.32-18.9a.44.44,0,0,1,.3-.19h1.54a.39.39,0,0,1,.18.51Zm10.36-.32a4.48,4.48,0,1,1,4.48-4.48A4.49,4.49,0,0,1,69.74,72.8Zm-10-14.11A2.35,2.35,0,1,0,57.35,61,2.35,2.35,0,0,0,59.7,58.69Z">
                            </path>
                        </g>
                    </svg>
                    <RouterLink :class="`${dta == 'seller' ? `text-orange-500` : ``}`" class="text-white text-xl hover:text-orange-300" to="/seller">Sellers</RouterLink>
                </section>
            </details>
        </section>
    </main>
</template>
<style scoped>
details>summary {
    list-style: none;
}

details summary::-webkit-details-marker {
    display: none;
}
</style>