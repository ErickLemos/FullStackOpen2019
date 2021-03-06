import axios from 'axios'
const baseUrl = '/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request
        .then(response => response.data)
        .catch(() => console.log('fail'));
};

const create = newObject => {
    newObject.id += 1;
    console.log(newObject);
    const request = axios.post(baseUrl, newObject);
    return request
        .then(response => response.data)
        .catch(() => console.log('fail'));
};

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request
        .then(response => response.data)
        .catch(() => console.log('fail'));
};

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request
        .then(response => response.data)
        .catch(() => console.log('fail'));
};

export default {getAll, create, update, remove}
// complete
