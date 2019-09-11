import axios from "axios";

const baseUrl = "https://marco-iann-nc-news-api.herokuapp.com/api/";

export const checkUsername = username => {
  return axios.get(`${baseUrl}users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getTopics = () => {
  return axios.get(`${baseUrl}topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = params => {
  return axios
    .get(`${baseUrl}articles`, {
      params
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = id => {
  return axios.get(`${baseUrl}articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const getCommentsByArticleId = (id, params) => {
  return axios
    .get(`${baseUrl}articles/${id}/comments`, {
      params
    })
    .then(({ data }) => {
      return data;
    });
};

export const addUser = user => {
  return axios.post(`${baseUrl}users`, user).then(({ data: { user } }) => {
    return user;
  });
};

export const postArticle = newArticle => {
  return axios
    .post(`${baseUrl}articles`, newArticle)
    .then(({ data: { article } }) => {
      return article;
    });
};
