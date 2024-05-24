import axios from "axios";

const API_URL = "http://localhost:3001/api/auth/";

const postLogin = async (email, password) => {
  const response = await axios.post(API_URL + "login", { email, password });
  return response.data;
};

const getMe = async (token) => {
  const response = await axios.get(API_URL + "me", {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export { postLogin, getMe };
