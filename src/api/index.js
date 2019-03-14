import axios from 'axios';

const API_BASE_URL = 'https://liftdashboardapi.azurewebsites.net/api';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchIndicators(){
  return client.get('/indicators');
}