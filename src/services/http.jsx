import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const http = { get: axios.get, post: axios.post };
export default http;
