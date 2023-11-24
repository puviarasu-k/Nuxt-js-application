<template>
    <div class="login-page">
        <form @submit="submit" class="login-container">
            <h1>Welcome to Nuxt JS</h1>
            <InputField required :placeholder="'Enter your username'" :name="'username'" :v-model="username"
                :id="'username'" :type="'text'" />
            <InputField required :placeholder="'Enter your password'" :name="'password'" :v-model="password"
                :id="'password'" :type="'password'" />
            <label v-if="errorMessage != ''" style="color: red;">{{ errorMessage }}</label>
            <SubmitButton :value="'Log In'">Log In</SubmitButton>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        submit(event) {
            event.preventDefault();
            debugger
            if (username.value == 'Puvi' && password.value == '12345') {
                navigateTo('/home')
            }
            else {
                this.errorMessage = 'Username or Password is incorrect'
            }
        }
    }
}
definePageMeta({
  layout: false,
})
</script>
  
<style>
.login-page {
    height: 100%;
    display: grid;
    place-items: center;
}

.login-container {
    border: 1px solid rgb(219 215 215);
    border-radius: 5px;
    padding: 10px;
    display: grid;
    gap: 30px;
    place-items: center;
}
</style>
  