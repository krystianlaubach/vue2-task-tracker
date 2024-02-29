import axios from 'axios';

export async function addTask(title, completed) {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
            title: title,
            completed: completed
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        }
    );

    return response.data;
}
