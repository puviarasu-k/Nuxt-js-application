<template>
    <div class="login-page">
        <!-- circle -->
        <div style="width: 500px;height: 500px;top: -35%;border-radius: 100%;left: -10%;">
        </div>

        <!-- form -->
        <form @submit="submit" class="login-container">
            <div class="right-side">
                <img src="~/assets/image/DataCT.jpeg" loading="lazy" alt="logo">
            </div>
            <div class="left-side">
                <section>
                    <h1>Dat<span style="color:#003A62">ACT</span></h1>
                    <h2>SIGN IN</h2>
                    <div class="input-group">
                        <i>
                            <img src="~/assets/SVG/profile.svg" alt="profile">
                        </i>
                        <InputField required :placeholder="'Enter Your Username'" :name="'username'" :v-model="username"
                            :id="'username'" :type="'text'" />
                    </div>
                    <div class="input-group">
                        <i>
                            <img src="~/assets/SVG/password.svg" alt="passsword" />
                        </i>
                        <InputField required :placeholder="'Enter Your Password'" :name="'password'" :v-model="password"
                            :id="'password'" :type="showPassword ? 'text' : 'password'" />
                        <button class="show-pass" type="button" @click="showPassword = !showPassword">
                            <img v-if="!showPassword" src="~/assets/SVG/openPassword.svg" />
                            <img v-if="showPassword" src="~/assets/SVG/closepassword.svg" />
                        </button>
                    </div>
                    <label v-if="errorMessage != ''" style="color: red;">{{ errorMessage }}</label>
                    <SubmitButton :value="'Sign In'"></SubmitButton>
                </section>
            </div>
        </form>

        <!-- end circle -->
        <div style="width: 350px;height: 200px;bottom: 0;border-top-left-radius: 100%;right: 0;">
        </div>
    </div>
</template>

<script>
import login from '../service/api/login'

export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            showPassword: false,
        }
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            if (username.value !== '' && password.value !== '') {

                let body = {
                    userName: username.value,
                    password: password.value
                }

                const data = await login(body); // API

                if (data?.value?.statusCode == 200) {
                    navigateTo('/dashboard');
                }
                else {
                    this.errorMessage = 'Username or Password is incorrect'
                }
            }
        }
    }
}
definePageMeta({
    layout: false
})
</script>
  
<style lang="scss">
.input-group {
    position: relative;
    display: inline-block;

    .show-pass {
        position: absolute;
        right: 5px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        top: 50%;
        transform: translateY(-50%);
    }

    & i {
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }

    & input {
        padding: 15px 15px 15px 35px;
        border: none;
        border-radius: 5px;
    }

    & input:focus-visible {
        outline: none;
    }
}

.left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    padding: 10px;
    background-color: #01b0f1;

    & section {
        display: grid;
        gap: 20px;

        & h1 {
            font-size: 50px;
            color: white;
            place-self: center;
            margin-top: 0;
            margin-bottom: 10px;
        }

        & h2 {
            color: white;
            place-self: center;
            margin: 0;
        }
    }
}

.right-side {
    width: 50%;
    display: grid;
    place-items: center;

    & img {
        width: 50%;
    }
}

.login-page {
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #f1f1f1;

    .login-container {
        border: 1px solid rgb(219 215 215);
        display: flex;
        background: white;
        z-index: 1;
        width: 60%;
        height: 550px;
        border-radius: 40px;
    }

    >div {
        position: absolute;
        background-color: white;
    }
}
</style>
  