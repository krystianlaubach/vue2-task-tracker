<template>
    <div class="container">
        <div v-bind:key="task.id" v-for="task in tasks">
            <TaskItem v-bind:task="task" v-on:deleteTask="$emit('deleteTask', task.id)" />
        </div>
    </div>
</template>

<script>
    import TaskItem from '@/components/TaskItem.vue';

    export default {
        name: 'TasksList',
        components: {
            TaskItem,
        },
        props: [
            'tasks',
        ],
    };
</script>

<style scoped>
    .container {
        margin: 0 32px;
    }
</style>
