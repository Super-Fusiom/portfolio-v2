<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(() =>
    queryCollection("blog").path(route.path).first(),
);
</script>

<template>
    <ContentRenderer v-if="post" :value="post" />
    <h1 v-else>Post not found</h1>
</template>
