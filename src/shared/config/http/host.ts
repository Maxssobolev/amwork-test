import axios from 'axios';

const $jsonPlaceholder = axios.create({
  baseURL: process.env.REACT_APP_API_JSONPLACEHOLDER,
});

export { $jsonPlaceholder };
