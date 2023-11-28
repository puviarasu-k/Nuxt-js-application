<template>
    <div class="login-page">
        <div
            style="position: absolute;background-color: white;width: 500px;height: 500px;top: -35%;border-radius: 100%;left: -10%;">
        </div>
        <form @submit="submit" class="login-container">
            <div class="right-side">
                <img src="DataCT.jpeg" loading="lazy" alt="logo" width="250" height="250">
            </div>
            <div class="left-side">
                <section style="display: grid;gap: 20px;">
                    <h1 style="font-size: 50px;color: white;place-self: center;margin-top: 0;margin-bottom: 10px;">DatACT</h1>
                    <h2 style="color: white;place-self: center;margin: 0;">SIGN IN</h2>
                    <div class="input-group">
                        <i><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px"
                                viewBox="0 0 45.532 45.532" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z">
                                        </path>
                                    </g>
                                </g>
                            </svg></i>
                        <InputField required :placeholder="'Enter Your Username'" :name="'username'" :v-model="username"
                            :id="'username'" :type="'text'" />
                    </div>
                    <div class="input-group">
                        <i>
                            <svg width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none"></rect>
                                        </g>
                                        <g id="Layer_7" data-name="Layer 7">
                                            <path
                                                d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM14,35a3,3,0,1,1,3-3A2.9,2.9,0,0,1,14,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,23,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,32,35Z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </i>
                        <InputField required :placeholder="'Enter Your Password'" :name="'password'" :v-model="password"
                            :id="'password'" :type="showPassword ? 'text' : 'password'" />
                        <button class="show-pass" type="button" @click="showPassword = !showPassword">
                            <svg v-if="!showPassword" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="showPassword" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <label v-if="errorMessage != ''" style="color: red;">{{ errorMessage }}</label>
                    <SubmitButton :value="'Sign In'"></SubmitButton>
                </section>
            </div>
        </form>
        <div
            style="position: absolute;background-color: white;width: 350px;height: 200px;bottom: 0;border-top-left-radius: 100%;right: 0;">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            showPassword: false,
            color: useName()
        }
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            if (username.value !== '' && password.value !== '') {
                const { data: data } = await useFetch('httP://localhost:9001/api/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName: username.value,
                        password: password.value
                    })
                })
                if (data?.value?.statusCode == 200) {
                    navigateTo('/home');
                }
                else {
                    this.errorMessage = 'Username or Password is incorrect'
                }
            }
        }
    }
}
definePageMeta({
    layout: false,
})
</script>
  
<style scoped>
.input-group {
    position: relative;
    display: inline-block;
}

.input-group i {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
}

.input-group .show-pass {
    position: absolute;
    right: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    top: 50%;
    transform: translateY(-50%);
}

.left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    height: 100%;
    background-color: #01b0f1;
}

.right-side {
    width: 50%;
    display: grid;
    place-items: center;
}

.login-page {
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #f1f1f1;
}

.login-container {
    border: 1px solid rgb(219 215 215);
    display: flex;
    background: white;
    width: 60%;
    height: 550px;
    border-radius: 40px;
    place-items: center;
}

input {
    padding: 15px 15px 15px 35px;
    border: none;
}

input:focus-visible {
    outline: none;
}
</style>
  