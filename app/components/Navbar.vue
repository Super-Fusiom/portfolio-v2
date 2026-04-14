<template>
    <nav>
        <h1>PS@SF</h1>
        <div>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/blogs">Blogs</NuxtLink>
        </div>
    </nav>
</template>

<style>
nav {
    display: flex;
    justify-content: space-between;
}

nav > div {
    display: flex;
    gap: 3rem;
}
</style>
