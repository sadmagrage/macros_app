import Axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axios = Axios.create({
     baseURL: API_URL,
     headers: { Accept: "application/json", "Content-Type": "application/json" }
});

export default axios;