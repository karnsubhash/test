import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

//export const instance = axios.create({baseURL:window.location.origin})
export const instance = axios.create({
  baseURL: "https://test-ui-server.vercel.app",
  // window.location.protocol + "//" + window.location.hostname + ":" + 8017,
});

export const getImageFromBackend = (imageName) => {
  return "https://test-ui-server.vercel.app/geographyImages/" + imageName;
};
