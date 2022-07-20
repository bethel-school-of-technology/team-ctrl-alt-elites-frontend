import axios from 'axios';


const baseURL = "http://localhost:8080/Profiles";

const API = {

    getAll: () => {
        return axios.get(baseURL);
    },
    createProfile: (newOwner) => {
        return axios.post(baseURL, newOwner )
    }

}



export default API;