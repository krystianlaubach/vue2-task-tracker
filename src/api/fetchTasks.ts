import axios from 'axios';

export async function fetchTasks(limit) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=' + (limit ? limit : 5),
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        }
    );

    return response.data;
}
