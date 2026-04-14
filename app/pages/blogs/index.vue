<script lang="ts" setup>
const { data: posts } = await useAsyncData("blog", () => {
    return queryCollection("blog")
        .select("path", "title", "date", "description")
        .order("date", "DESC")
        .all();
});
</script>

<template>
    <div>
        <h1>Blogs</h1>
        <div class="grid" v-for="post in posts" :key="post.path">
            <NuxtLink :to="post.path">
                <div class="card">
                    <h1>{{ post.title }}</h1>
                    <h3>{{ post.description }}</h3>
                    <p>{{ post.date }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
