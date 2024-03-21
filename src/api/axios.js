import axios from "axios";

const BASE_URL = "https://delivery.miladyfans.com/";
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // 'authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export default instance;


