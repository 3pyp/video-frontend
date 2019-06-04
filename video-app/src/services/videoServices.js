import axios from "axios";
const BASE_URL = "https://videoback-app.herokuapp.com/api/v1";

export const getVideosService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/get/videos`)
      .then(videos => {
        resolve(videos.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
