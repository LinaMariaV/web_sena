import axios from "axios";

const API_URL = "http://localhost:3001/api/auth/register";

const postRegister = async (name, email, password, phone) => {
  const response = await axios.post(API_URL, { name, email, password, phone });
  return response.data;
};

export { postRegister };
