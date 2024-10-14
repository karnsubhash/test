import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

//export const instance = axios.create({baseURL:window.location.origin})
export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? window.location.protocol + "//" + window.location.hostname + ":" + 8017
      : "https://test-ui-server.vercel.app",
  // window.location.protocol + "//" + window.location.hostname + ":" + 8017,
});

export const getImageFromBackend = (path, imageName) => {
  return process.env.NODE_ENV !== "production"
    ? window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        8017 +
        "/api/" +
        path +
        "/" +
        imageName +
        "?" +
        Date.now()
    : "https://test-ui-server.vercel.app/" + path + "/" + imageName;
};
