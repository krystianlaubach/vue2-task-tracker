<template>
    <div>
        <AddTask v-on:addTask="addTask" />
        <TasksList v-bind:tasks="tasks" v-on:deleteTask="deleteTask" />
    </div>
</template>

<script>
    import AddTask from '@/components/AddTask.vue';
    import TasksList from '@/components/TasksList.vue';
    import { addTask } from '@/api/addTask.ts';
    import { deleteTask } from '@/api/deleteTask.ts';
    import { fetchTasks } from '@/api/fetchTasks.ts';

    export default {
        name: 'HomeView',
        components: {
            AddTask,
            TasksList,
        },
        data() {
            return {
                tasks: [],
            };
        },
        methods: {
            deleteTask(id) {
                deleteTask(id)
                    .then(() => this.tasks = this.tasks.filter(task => task.id !== id))
                    .catch(error => console.error(error));
            },
            addTask(newTask) {
                const { title, completed } = newTask;

                addTask(title, completed)
                    .then(task => this.tasks = [...this.tasks, task])
                    .catch(error => console.error(error));
            },
        },
        created() {
            fetchTasks(5)
                .then(tasks => this.tasks = tasks)
                .catch(error => console.error(error));
        }
    }
</script>
