import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/services`;

export const getServices = () => axios.get(API_URL);

export const createService = (serviceData, token) =>
  axios.post(API_URL, serviceData, {
    headers: { Authorization: `Bearer ${token}` },
  });
