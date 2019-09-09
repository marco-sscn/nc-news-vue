<template>
    <ul class="comments">
        <li v-bind:key="index" v-for="(comment, index) in comments">
            <v-card class="comment-card">
                <v-list-item three-line>
                    <v-list-item-content class="align-self-start">
                        <v-list-item-subtitle class="comment-body">{{ comment.body }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ comment.author }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ getMoment(comment.created_at) }}</v-list-item-subtitle>
                        <v-row class="icons" align="center" justify="start">
                            <v-icon class="mr-1" color="red">mdi-heart</v-icon>
                            <span class="subheading mr-2">{{ comment.votes }}</span>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </li>
    </ul>
</template>

<script>
import moment from "moment";
import { getCommentsByArticleId } from "../api";

export default {
    props: ["articleId"],
    methods: {
        getMoment(timestamp) {
            return moment(timestamp).fromNow();
        }
    },
    created() {
        getCommentsByArticleId(this.articleId).then(({ comments }) => {
            this.comments = comments;
        });
    },
    data() {
        return {
            comments: []
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
.comment-body {
    margin-bottom: 15px;
    color: black !important;
}
.icons {
    margin-left: 0px;
}
</style>