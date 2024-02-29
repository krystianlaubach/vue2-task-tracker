<template>
    <div class="container">
        <form @submit="addTask">
            <input type="text" name="task" placeholder="Add Task" v-model="title" />
            <input class="button" type="submit" value="Add" />
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                title: '',
            };
        },
        methods: {
            addTask(event) {
                event.preventDefault();

                const newTask = {
                    title: this.title,
                    completed: false,
                };

                this.$emit('addTask', newTask);
                this.title = '';
            },
        },
    };
</script>

<style scoped>
    .container {
        margin: 32px 32px;
    }

    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 16px;
        margin-right: 8px;
        border: 1px solid #35495e;
        border-radius: 8px;
    }

    input[type="submit"] {
        flex: 2;
        padding: 16px;
        margin-left: 8px;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background: #42b883;
        color: #35495e;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background: #35495e;
        color: #42b883;
    }
</style>
