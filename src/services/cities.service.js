import axios from "axios";
const API_URL = "http://localhost:3001/api/cities/";

const getAllCities = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

const getCity = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const postCity = async (name, country, description, url_image) => {
  const response = await axios.post(API_URL + "create", {
    name,
    country,
    description,
    url_image,
  });
  return response.data;
};

const putCity = async (id, name, country, description, url_image) => {
  const response = await axios.put(API_URL + id, {
    name,
    country,
    description,
    url_image,
  });
  return response.data;
};

const deleteCity = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

export { getAllCities, getCity, postCity, putCity, deleteCity };
