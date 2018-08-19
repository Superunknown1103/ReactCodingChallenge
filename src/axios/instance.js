import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-routecandidates.cloudfunctions.net/tasks"
});

export default instance;
