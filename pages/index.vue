import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="Index">
        <div class="login">
            <div>
                <div class="text">
                    <h1>Login Page</h1>
                </div>
                <div class="mail">
                    <input type="text" name="mail" placeholder="witcher@gmail.com" class="mail" v-model="email">
                </div>
                <div class="password">
                    <input type="password" name="password" placeholder="password" class="password" v-model="password">
                </div>
                <div class="registertext">
                    <NuxtLink to="/register"> 
                        <button class="goregisterbutton">Register</button>
                    </NuxtLink>
                </div>
                <div>
                    <button class="loginbutton" @click="login">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async login() {
            let res =  await axios.get(`http://localhost:3000/api/login?mail=${this.email}&pass=${this.password}`, { headers: {"Auth": "witcherapikey"}})
            console.log(31)
            if(res.data) {
                alert("You have logged in successfully!");
            } else {
                alert("Something went wrong!");
            }
        }
    }
}
</script>
<style>
</style>