import axios from "axios";

const API_URL = "http://localhost:3001/api/trips/";

const getAllTrips = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const postTrip = async (
  token,
  origin_city_id,
  destination_id,
  user_id,
  start_date,
  end_date,
  number_of_tickets
) => {
  const response = await axios.post(
    API_URL + "create",
    {
        origin_city_id,
        destination_id,
        user_id,
        start_date,
        end_date,
        number_of_tickets,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const getTrip = async (token, id) => {
  const response = await axios.get(API_URL + id, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const putTrip = async (
  token,
  id,
  origin_city_id,
  destination_id,
  user_id,
  start_date,
  end_date,
  number_of_tickets
) => {
  const response = await axios.put(
    API_URL + id,
    {
      origin_city_id,
      destination_id,
      user_id,
      start_date,
      end_date,
      number_of_tickets,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const deleteTrip = async (token, id) => {
  const response = await axios.delete(API_URL + id, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export { getAllTrips, postTrip, getTrip, putTrip, deleteTrip };
