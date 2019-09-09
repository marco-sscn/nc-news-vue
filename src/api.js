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

export const getArticles = params => {
  return axios.get(`${baseUrl}articles`, {
    params
  }).then(({
    data
  }) => {
    return data;
  });
};