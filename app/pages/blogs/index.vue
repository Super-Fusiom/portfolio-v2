<script lang="ts" setup>
const { data: posts } = await useAsyncData("blog", () => {
    return queryCollection("blog")
        .select("path", "title", "date", "description", "tags")
        .order("date", "DESC")
        .all();
});
</script>

<template>
    <div>
        <h1>Blogs</h1>
        <h2>
            Here are the things I've been up to, project details fall under
            this.
        </h2>
        <h3>
            If a project is updated, then the blog talking about it will also be
            updated as well as what I've changed.
        </h3>
        <div class="list">
            <NuxtLink v-for="post in posts" :key="post.path" :to="post.path">
                <div class="card">
                    <h1>{{ post.title }}</h1>
                    <h3>{{ post.description }}</h3>
                    <p>{{ post.date }}</p>
                    <div class="tags">
                        <p v-for="tag in post.tags">{{ tag }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
