<template>
    <div>
        <h2>Articles</h2>
        <ul id="articles-list">
            <li v-bind:key="index" v-for="(article, index) in articles">
                <article-card :article="article"></article-card>
            </li>
        </ul>
    </div>
</template>

<script>
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard.vue";

export default {
    components: {
        "article-card": ArticleCard
    },
    created() {
        getArticles().then(data => {
            this.articles = data.articles;
            this.articlesCount = data.articles_count;
        });
    },
    data() {
        return {
            articles: [],
            articlesCount: 0
        };
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