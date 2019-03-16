import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API;

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchIndicators(){
  return client.get('/indicators');
}