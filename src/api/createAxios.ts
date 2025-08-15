import axios from "axios";

export const api = axios.create({
  // baseURL: "https://ajman-media-dashboard-backend.vercel.app/",
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});
