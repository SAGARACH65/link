import axios from 'axios';


const BASE_URL = 'http://localhost:8848/api/linky';

export const getTags=()=>{
    return  axios.get(`${BASE_URL}/tags`);
}