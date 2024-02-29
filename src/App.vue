<template>
    <div id="app">
        <TaskTrackerHeader />
        <router-view />
    </div>
</template>

<script>
    import TaskTrackerHeader from '@/components/TaskTrackerHeader.vue';

    export default {
        name: 'App',
        components: {
            TaskTrackerHeader,
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #35495e;
        margin-top: 60px;
    }
</style>
