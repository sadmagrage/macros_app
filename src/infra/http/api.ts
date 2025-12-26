import Axios from "axios";

const API_URL = import.meta.env.BASE_URL;

const axios = Axios.create({
     baseURL: API_URL,
     headers: { Accept: "application/json", "Content-Type": "application/json" }
});

export default axios;