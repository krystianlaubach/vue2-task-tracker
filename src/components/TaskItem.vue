<template>
    <div class="task-item" v-bind:class="{ 'is-complete':task.completed }">
        <p>
            <input type="checkbox" v-on:change="markComplete" v-bind:checked="task.completed" />
            {{ task.title }}
            <button class="del" v-bind:class="{ 'del-complete':task.completed }" @click="$emit('deleteTask', task.id)">x</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'TaskItem',
        props: [
            'task',
        ],
        methods: {
            markComplete() {
                this.$props.task.completed = !this.$props.task.completed;
            },
        },
    };
</script>

<style scoped>
    .task-item {
        background: #42b883;
        color: #35495e;
        font-weight: bold;
        padding: 8px 24px;
        margin-bottom: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .is-complete {
        background: #35495e;
        color: #42b883;
        text-decoration: line-through;
    }

    input[type="checkbox"] {
        float: left;
    }

    .del {
        background: #35495e;
        color: #42b883;
        font-size: 18px;
        font-weight: bold;
        border: none;
        padding: 2px 8px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }

    .del-complete {
        background: #42b883;
        color: #35495e;
    }
</style>
