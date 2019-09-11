<template>
    <div>
        <div id="articles-header">
            <h2>{{ this.$route.params.slug || "Articles" }}</h2>
            <v-btn v-if="isLoggedIn" class="ma-2" tile outlined color="red" to="/post">
                <v-icon left>mdi-pencil</v-icon>Post Article
            </v-btn>
        </div>
        <spinner v-if="!articles"></spinner>
        <ul v-else id="articles-list">
            <li v-bind:key="index" v-for="(article, index) in articles">
                <article-card :article="article"></article-card>
            </li>
        </ul>
        <v-pagination
            @input="next"
            color="red"
            v-model="page"
            :length="Math.ceil(articlesCount / 10)"
        ></v-pagination>
    </div>
</template>

<script>
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard.vue";
import Spinner from "../components/Spinner.vue";

export default {
    components: {
        "article-card": ArticleCard,
        spinner: Spinner
    },
    created() {
        getArticles({
            topic: this.$route.params.slug || null
        }).then(data => {
            this.articles = data.articles;
            this.articlesCount = data.articles_count;
        });
    },
    methods: {
        next: function(page) {
            getArticles({
                topic: this.$route.params.slug || null,
                p: page
            }).then(data => {
                this.articles = data.articles;
            });
        }
    },
    data() {
        return {
            articles: null,
            articlesCount: 0,
            page: 1
        };
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.state.loggedInUser ? true : false;
        }
    }
};
</script>

<style scoped>
#articles-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
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