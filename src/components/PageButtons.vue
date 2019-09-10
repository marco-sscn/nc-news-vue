<template>
    <div class="text-center">
        <v-pagination color="red" v-model="page" :length="this.pages" :total-visible="7"></v-pagination>
    </div>
</template>

<script>
export default {
    props: ["pages"],
    data() {
        return {
            page: 1
        };
    }
};
</script>

<style>
</style>