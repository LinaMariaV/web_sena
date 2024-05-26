import axios from "axios"
const API_URL = "http://localhost:3001/api/users/"

const getAllUsers = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: token,
    },
  });

  return response.data;

  const getUser = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
  };

  const postUser = async (name, email, password, role) => {
    const response = await axios.post(API_URL + "create", {
      name,
      email,
      password,
      role,
    });
    return response.data;
  };

    const putUser = async (id, name, email, password, role) => {
        const response = await axios.put(API_URL + id, {
        name,
        email,
        password,
        role,
        });
        return response.data;
    };

    const deleteUser = async (id) => {
        const response = await axios.delete(API_URL + id);
        return response.data;
    };

}
export { getAllUsers, getUser, postUser, putUser, deleteUser}