<template>
    <div class="about">
        <h2>Task Tracker App</h2>
        <p>
            This is a simple Task Tracker app built with
            <a href="https://vuejs.org/" target="_blank">Vue.js</a>
            and mock REST API by
            <a href="https://jsonplaceholder.typicode.com/" target="_blank">{JSON} Placeholder</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'AboutView',
    };
</script>

<style scoped>
    a {
        color: #42b883;
        font-weight: bold;
        text-decoration: none;
    }

    a:hover {
        color: #35495e !important;
    }

    a:visited {
        color: #42b883 !important;
    }
</style>
