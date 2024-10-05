import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_TEST_URL,
  withCredentials: true,
});

export { Axios };
