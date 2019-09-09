import axios from "axios";

const baseUrl = "https://marco-iann-nc-news-api.herokuapp.com/api/";

export const getTopics = () => {
  return axios.get(`${baseUrl}topics`).then(({
    data: {
      topics
    }
  }) => {
    return topics;
  });
}