<template>
    <div>
        <h2>Register</h2>
        <form v-on:submit.prevent="register">
            <v-text-field v-model="username" color="red" placeholder="Username" required></v-text-field>
            <v-text-field v-model="name" color="red" placeholder="Full Name" required></v-text-field>
            <p id="registration-error" v-if="error">Username already exists</p>
            <v-btn type="submit" id="register-button" class="mt-12" color="red">Register</v-btn>
        </form>
    </div>
</template>

<script>
import { addUser } from "../api";

export default {
    data() {
        return {
            username: "",
            name: "",
            error: null
        };
    },
    methods: {
        register: function() {
            addUser({
                username: this.username,
                name: this.name,
                avatar_url:
                    "http://i-cdn.phonearena.com/images/article/63735-image/5-secure-browsers-for-Android-with-always-on-incognito-mode-and-automatic-user-data-clearing.jpg"
            })
                .then(user => {
                    this.$store.commit("logIn", user);
                    this.$router.push("/dashboard");
                })
                .catch(err => {
                    this.error = err;
                });
        }
    }
};
</script>

<style scoped>
#register-button {
    margin-top: 20px !important;
}
#registration-error {
    color: red;
}
</style>