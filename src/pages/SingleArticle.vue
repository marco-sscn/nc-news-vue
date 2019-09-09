<template>
    <div v-if="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.author }}</p>
        <p>{{ article.body }}</p>
        <v-icon class="mr-1" color="red">mdi-heart</v-icon>
        <span class="subheading mr-2">{{ article.votes }}</span>
        <p>Comments: {{ article.comments_count }}</p>
        <comments-list :articleId="article.article_id"></comments-list>
    </div>
</template>

<script>
import { getArticleById } from "../api";
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
    }
};
</script>

<style>
</style>