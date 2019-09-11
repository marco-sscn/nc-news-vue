<template>
    <div>
        <h2>New Article</h2>
        <form v-on:submit.prevent="postArticle">
            <v-text-field v-model="title" color="red" placeholder="Title" required></v-text-field>
            <v-textarea v-model="body" color="red" name="input-7-4" placeholder="Article" required></v-textarea>
            <v-btn class="ma-2" tile outlined color="red" type="submit">
                <v-icon left>mdi-pencil</v-icon>Post Article
            </v-btn>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            body: ""
        };
    },
    methods: {
        postArticle: function() {}
    }
};
</script>

<style>
</style>