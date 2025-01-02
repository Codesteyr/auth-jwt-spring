import axios from 'axios'; // Правильно


axios.defaults.baseURL = 'http://192.168.70.87:7070'
axios.defaults.headers.post["Content-type"] = 'application/json'

export const request = (method, url, data) => {
    return axios({
        method,
        url,
        data
    });
};