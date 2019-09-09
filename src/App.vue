<template>
    <v-app id="app">
        <app-header></app-header>
        <v-content></v-content>
    </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "App",
    components: {
        "app-header": Header
    },
    data: () => ({})
};
</script>

<style>
#app {
    max-width: 1000px;
    margin: auto;
    padding: 50px;
}
</style>
