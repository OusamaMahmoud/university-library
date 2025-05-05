import axios from "axios";

const apiclient = axios.create({
  baseURL: "http://161.97.126.23:3002",
});

export default apiclient;
