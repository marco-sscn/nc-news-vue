<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit.prevent="login">
            <v-text-field v-model="username" color="red" placeholder="Username" required></v-text-field>
            <div id="sign-in-message">
                <p>Not yet registered?</p>
                <a id="sign-in-link" v-on:click="register">Sign In</a>
            </div>
            <v-btn type="submit" id="login-button" class="mt-12" color="red">Login</v-btn>
            <p id="username-error" v-if="notFound">Username does not exist</p>
        </form>
    </div>
</template>

<script>
import { checkUsername } from "../api";

export default {
    data() {
        return {
            username: "",
            notFound: false
        };
    },
    methods: {
        login: function() {
            checkUsername(this.username)
                .then(user => {
                    this.$store.commit("logIn", user);
                    this.notFound = false;
                    this.$router.push("/dashboard");
                })
                .catch(() => {
                    this.notFound = true;
                });
        },
        register: function() {
            this.$router.push("/register");
        }
    }
};
</script>

<style scoped>
#username-error {
    margin-top: 20px;
    color: red;
}
#login-button {
    margin-top: 20px !important;
}
#sign-in-message {
    display: flex;
}
#sign-in-link {
    margin-left: 5px;
    color: red;
}
</style>