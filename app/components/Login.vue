<template>
    <div>
        <h1>Login to Studious right now!!!</h1>
        <div id="nav">
            <router-link to="/" exact>Login</router-link>
            <router-link to="/register">Register</router-link>
            <div id="login-form">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required="required" v-model="user.email">
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required="require" v-model="user.password">
                <br>
                <label for="rememberMe">Remember Me</label>
                <input type="checkbox" id="rememberMe" name="rememberMe" required="require" v-model="user.rememberMe">
                <br>
                <button id="login-button" v-on:click="login()">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    rememberMe: false
                }
            }
        },

        methods: {
            login () {
                let creds = {
                    email: this.user.email,
                    password: this.user.password,
                    rememberMe: this.user.rememberMe
                };
            }
        },

        mounted () {
            console.log('Component Mounted...');
        } 
    } 
</script>

<style>
</style>