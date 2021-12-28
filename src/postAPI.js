import axios from 'axios';

export const getPostData = () => {
    return axios.get('http://localhost:3000/data');
}