import axios from "axios";

export default axios.create({
  baseURL: "https://spheric-gearing-291916.uc.r.appspot.com/api/",
  headers: {
    "Content-type": "application/json",
  }
});