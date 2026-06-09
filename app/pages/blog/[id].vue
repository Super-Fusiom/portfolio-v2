<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(() =>
    queryCollection("blog").path(route.path).first(),
);

if (post.value) {
    useSeoMeta({
        title: () => post.value?.title,
        ogTitle: () => post.value?.title,
        description: () => post.value?.description,
        ogDescription: () => post.value?.description,

        author: () => post.value?.author,
        articlePublishedTime: () => post.value?.date,
    });
}
</script>

<template>
    <ContentRenderer class="md-content" v-if="post" :value="post" />
    <h1 v-else>Post not found</h1>
</template>
