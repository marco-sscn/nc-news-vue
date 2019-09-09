<template>
    <div>
        <h2>Topics</h2>
        <ul id="topics-list">
            <li v-bind:key="index" v-for="(topic, index) in topics">
                <v-card class="topic-card">
                    <v-list-item three-line>
                        <v-list-item-content class="align-self-start">
                            <v-list-item-title class="headline mb-2" v-text="topic.slug"></v-list-item-title>
                            <v-list-item-subtitle v-text="topic.description"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </li>
        </ul>
    </div>
</template>

<script>
import { getTopics } from "../api";

export default {
    created() {
        getTopics().then(topics => {
            this.topics = topics;
        });
    },
    data() {
        return {
            topics: []
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