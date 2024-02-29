import axios from 'axios';

export async function deleteTask(id) {
    const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/todos/' + id,
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        }
    );

    return response.data;
}
