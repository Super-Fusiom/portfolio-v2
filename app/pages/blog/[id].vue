<script lang="ts" setup>
const route = useRoute();
const cleanPath = computed(() => {
    const base = `/blog/${route.params.id}`;
    return base.replace(/\/+$/, "");
});
const { data: post } = await useAsyncData(`blog-post-${route.params.id}`, () =>
    queryCollection("blog").path(cleanPath.value).first(),
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
