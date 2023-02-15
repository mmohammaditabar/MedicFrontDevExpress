import axios from 'axios';
axios.defaults.baseURL='http://localhost:42163/api/';

export async function fetchData(url,config={}){
    return await axios.get(url,config) 
}

export function postData(url,payload,config={}){
    return axios.post(url,payload,config)
}
export function getById(url,config={}){
    return axios.get(url,config)
}

export function putData(url,payload,config={}){
    return axios.put(url,payload,config)
}
export function deleteData(url,config={}){
    return axios.delete(url,config)
}
///////