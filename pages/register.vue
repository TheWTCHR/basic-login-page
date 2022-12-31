<template>
    <div class="Register">
        <div class="login">
            <div>
                <div class="text">
                    <h1>Register Page</h1>
                </div>
                <div class="mail">
                    <input type="text" name="mail" placeholder="witcher@gmail.com" class="mail" v-model="email">
                </div>
                <div class="password">
                    <input type="password" name="password" placeholder="Password" class="password" v-model="password">
                </div>
                <div class="password">
                    <input type="password" name="password" placeholder="Password Again" class="passwordagain" v-model="passwordagain">
                </div>
                <div>
                    <button class="registerbutton" @click="fetchMail">Register</button>
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
            passwordagain: '',
            error: ''
        }
    },
    methods: {
        async fetchMail() {
            let res =  await axios.get(`http://localhost:3000/api/register?mail=${this.email}&pass=${this.password}&passagain=${this.passwordagain}`, { headers: {"Auth": "witcherapikey"}})
            if(res.data) {
                alert("You have registered successfully!");
            } else {
                alert("Something went wrong!");
            }
        }
    }
}
</script>
