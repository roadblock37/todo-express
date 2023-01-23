import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1/",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
