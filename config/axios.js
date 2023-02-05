import axios from "axios";

const clientAxios = axios.create({
    baseURL: process.env.backendURL
    // baseURL: "http://localhost:4000"
});

export default clientAxios
