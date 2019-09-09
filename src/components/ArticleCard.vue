<template>
    <v-card class="article-card">
        <v-list-item three-line>
            <v-list-item-content class="align-self-start">
                <v-list-item-subtitle>{{ article.topic }}</v-list-item-subtitle>
                <v-list-item-title class="headline mb-2">{{ article.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ article.author }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ getMoment(article.created_at) }}</v-list-item-subtitle>
                <v-row class="icons" align="center" justify="start">
                    <v-icon class="mr-1" color="red">mdi-heart</v-icon>
                    <span class="subheading mr-2">{{ article.votes }}</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1" color="black">mdi-comment-text</v-icon>
                    <span class="subheading">{{ article.comments_count }}</span>
                </v-row>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
import moment from "moment";

export default {
    props: ["article"],
    methods: {
        getMoment(timestamp) {
            return moment(timestamp).fromNow();
        }
    }
};
</script>

<style scoped>
.article-card:hover {
    transform: scale(1.01);
}
.icons {
    margin-left: 0px;
}
</style>