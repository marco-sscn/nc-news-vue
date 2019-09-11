<template>
    <div>
        <h2>New Article</h2>
        <form v-on:submit.prevent="postArticle">
            <v-overflow-btn
                v-model="selectedTopic"
                class="my-2"
                color="red"
                :items="topics"
                label="Topic"
            ></v-overflow-btn>
            <v-text-field v-model="title" color="red" placeholder="Title" required></v-text-field>
            <v-textarea v-model="body" color="red" name="input-7-4" placeholder="Article" required></v-textarea>
            <v-btn class="ma-2" tile outlined color="red" type="submit">
                <v-icon left>mdi-pencil</v-icon>Post Article
            </v-btn>
        </form>
    </div>
</template>

<script>
import { getTopics, postArticle } from "../api";

export default {
    created() {
        getTopics().then(topics => {
            topics.forEach(topic => {
                this.topics.push(topic.slug);
            });
        });
    },
    data() {
        return {
            title: "",
            body: "",
            topics: [],
            selectedTopic: ""
        };
    },
    methods: {
        postArticle: function() {
            const newArticle = {
                username: this.username,
                title: this.title,
                body: this.body,
                topic: this.selectedTopic
            };
            postArticle(newArticle).then(article => {
                this.$router.push("/articles/" + article.article_id);
            });
        }
    },
    computed: {
        username: function() {
            return this.$store.state.loggedInUser.username;
        }
    }
};
</script>

<style>
</style>