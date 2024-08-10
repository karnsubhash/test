import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

//export const instance = axios.create({baseURL:window.location.origin})
export const instance = axios.create({
  baseURL:
    window.location.protocol + "//" + window.location.hostname + ":" + 8017,
});

// export const LOCAL_URL =
//   window.location.protocol +
//   "//" +
//   window.location.hostname +
//   ":" +
//   window.location.port;
// export const localUIServerInstance = axios.create({ baseURL: LOCAL_URL });
