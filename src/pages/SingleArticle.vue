<template>
    <div v-if="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.author }}</p>
        <p>{{ article.body }}</p>
        <v-icon class="mr-1" color="red">mdi-heart</v-icon>
        <span class="subheading mr-2">{{ article.votes }}</span>
        <p>Comments: {{ article.comments_count }}</p>
        <v-btn v-if="canDelete" class="ma-2" tile outlined color="red" v-on:click="deleteArticle">
            <v-icon left>mdi-delete</v-icon>Delete Article
        </v-btn>
        <comments-list :articleId="article.article_id"></comments-list>
    </div>
</template>

<script>
import { getArticleById, remove } from "../api";
import CommentsList from "../components/CommentsList.vue";

export default {
    components: {
        "comments-list": CommentsList
    },
    created() {
        getArticleById(this.$route.params.id).then(article => {
            this.article = article;
        });
    },
    data() {
        return {
            article: null
        };
    },
    methods: {
        deleteArticle: function() {
            remove("articles", this.article.article_id).then(() => {
                this.$router.push("/articles");
            });
        }
    },
    computed: {
        canDelete: function() {
            return (
                this.$store.state.loggedInUser &&
                this.$store.state.loggedInUser.username === this.article.author
            );
        }
    }
};
</script>

<style>
</style>