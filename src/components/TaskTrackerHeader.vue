<template>
    <header class="header">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Task Tracker</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'TaskTrackerHeader',
    };
</script>

<style scoped>
    .header {
        color: #35495e;
    }

    nav {
        padding: 16px;
    }

    nav a {
        font-weight: bold;
        color: #35495e;
        text-decoration: none;
    }

    nav a.router-link-exact-active {
        color: #42b883;
    }
</style>
