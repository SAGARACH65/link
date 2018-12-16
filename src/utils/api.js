import axios from "axios";

const BASE_URL = "http://localhost:8848/api/linky";

export const getAllTags = () => {
  return axios.get(`${BASE_URL}/tags`);
};

export const getAllLinks = currentPage => {
  return axios.get(`${BASE_URL}/links?page=${currentPage}`);
};
