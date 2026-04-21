<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects", () => {
    return queryCollection("blog")
        .select("path", "title", "date", "description", "tags")
        .where("tags", "LIKE", "%project%")
        .order("date", "DESC")
        .all();
});

let { data: numOfProjectsQuerry } = await useAsyncData("projectsNum", () => {
    return queryCollection("blog").count();
});

let numOfProjects = numOfProjectsQuerry.value;
if (typeof numOfProjects == "undefined") {
    numOfProjects = 0;
}
</script>

<template>
    <div>
        <h1>Projects</h1>
        <p>
            Here are my top projects that I am proud of and want to show to the
            world.
        </p>
        <div class="list">
            <div v-if="numOfProjects > 0" v-for="project in projects">
                <NuxtLink :key="project.path" :to="project.path">
                    <div class="card">
                        <h1>{{ project.title }}</h1>
                        <h3>{{ project.description }}</h3>
                        <p>{{ project.date }}</p>
                    </div>
                </NuxtLink>
            </div>
            <h1 v-else>No projects yet, check back later!</h1>
        </div>
    </div>
</template>
