import axios from 'axios';


const baseURL = "http://localhost:3000/Profiles";

const API = {

    getAll: () => {
        return axios.get(baseURL);
    },
    createProfile: (newProfile) => {
        return axios.post(baseURL, newProfile)
    }

}



export default API;