<template>
    <div>
        <h2>{{ this.$route.params.slug || "Articles" }}</h2>
        <ul id="articles-list">
            <li v-bind:key="index" v-for="(article, index) in articles">
                <article-card :article="article"></article-card>
            </li>
        </ul>
        <page-buttons v-bind:pages="Math.ceil(articlesCount / 10)"></page-buttons>
    </div>
</template>

<script>
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard.vue";
import PageButtons from "../components/PageButtons.vue";

export default {
    components: {
        "article-card": ArticleCard,
        "page-buttons": PageButtons
    },
    created() {
        getArticles({
            topic: this.$route.params.slug || null
        }).then(data => {
            this.articles = data.articles;
            this.articlesCount = data.articles_count;
        });
    },
    updated() {
        getArticles({
            topic: this.$route.params.slug || null, p: this.actualPage
        }).then(data => {
            this.articles = data.articles;
        });
    },
    data() {
        return {
            articles: [],
            articlesCount: 0
        };
    },
    computed: {
        actualPage: function() {
            return this.$children[0].$data.page;
        }
    }
};
</script>

<style scoped>
ul {
    padding-inline-start: 0px;
    margin-top: 20px;
}
li {
    list-style-type: none;
    margin: 10px 0;
}
.topic-card:hover {
    transform: scale(1.01);
}
</style>