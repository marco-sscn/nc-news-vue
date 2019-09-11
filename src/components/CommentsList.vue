<template>
    <div class="comments">
        <ul>
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
        <form v-if="loggedInUser" id="post-comment" v-on:submit.prevent="addComment">
            <v-textarea
                color="red"
                v-model="comment"
                name="input-7-1"
                placeholder="Comment"
                required
            ></v-textarea>
            <v-btn class="ma-2" tile outlined color="red" type="submit">
                <v-icon left>mdi-pencil</v-icon>Post
            </v-btn>
        </form>
    </div>
</template>

<script>
import moment from "moment";
import { getCommentsByArticleId, postComment } from "../api";

export default {
    props: ["articleId"],
    created() {
        getCommentsByArticleId(this.articleId).then(({ comments }) => {
            this.comments = comments;
        });
    },
    data() {
        return {
            comments: [],
            comment: ""
        };
    },
    methods: {
        getMoment(timestamp) {
            return moment(timestamp).fromNow();
        },
        addComment: function() {
            const newComment = {
                article_id: this.articleId,
                username: this.loggedInUser,
                body: this.comment
            };
            postComment(newComment).then(comment => {
                this.comments.unshift(comment);
                this.comment = "";
            });
        }
    },
    computed: {
        loggedInUser: function() {
            return this.$store.state.loggedInUser
                ? this.$store.state.loggedInUser.username
                : null;
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
.comment-body {
    margin-bottom: 15px;
    color: black !important;
}
.icons {
    margin-left: 0px;
}
#post-comment {
    width: 500px;
    margin: auto;
    text-align: center;
}
</style>