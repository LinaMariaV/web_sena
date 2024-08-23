import axios from "axios";
const API_URL = "https://api-travel.linavillalba.me/api/cities/";

const getAllCities = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getCity = async (token, id) => {
  const response = await axios.get(API_URL + id, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const postCity = async (token, name, country, description, url_image) => {
  const response = await axios.post(
    API_URL + "create",
    {
      name,
      country,
      description,
      url_image,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const putCity = async (token, id, name, country, description, url_image) => {
  const response = await axios.put(
    API_URL + id,
    {
      name,
      country,
      description,
      url_image,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const deleteCity = async (token, id) => {
  const response = await axios.delete(API_URL + id, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export { getAllCities, getCity, postCity, putCity, deleteCity };
