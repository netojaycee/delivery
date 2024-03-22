import axios from "axios";

const BASE_URL = "https://delivery.miladyfans.com/";
// const BASE_URL = "http://localhost:3002/";
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    'authorization': `Bearer ${localStorage.getItem('user')}`,
  },
});

export default instance;
