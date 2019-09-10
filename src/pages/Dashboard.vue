<template>
    <div v-if="loggedInUser">
        <h2>{{ loggedInUser.username + "'s Dashboard" }}</h2>
        <v-avatar class="profile" color="grey" size="320" tile>
            <v-img :src="loggedInUser.avatar_url"></v-img>
        </v-avatar>
        <v-list-item-title class="title">{{ loggedInUser.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ loggedInUser.username }}</v-list-item-subtitle>
    </div>
    <h2 v-else>Please log in</h2>
</template>

<script>
export default {
    computed: {
        loggedInUser: function() {
            return this.$store.state.loggedInUser;
        }
    }
};
</script>

<style>
</style>