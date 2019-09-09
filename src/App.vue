<template>
    <v-app id="app">
        <app-header></app-header>
        <v-bottom-navigation :value="activeBtn" grow color="red">
            <v-btn class="nav-button" to="/topics">
                <span>Topics</span>
                <v-icon>mdi-newspaper</v-icon>
            </v-btn>
            <v-btn class="nav-button" to="/articles">
                <span>Articles</span>
                <v-icon>mdi-note</v-icon>
            </v-btn>
            <v-btn class="nav-button" to="/dashboard">
                <span>Dashboard</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-content id="content">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "App",
    components: {
        "app-header": Header
    },
    data() {
        return {
            activeBtn: 1
        };
    }
};
</script>

<style>
#app {
    max-width: 1000px;
    margin: auto;
    padding: 50px;
}
.nav-button {
    min-height: 56px;
}
#content {
    margin-top: 30px;
}
</style>
