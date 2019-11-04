import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API;

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchIndicators(clientId){
  if (clientId === null) return client.get(`/indicators`);
  return client.get(`/indicators/${clientId}`);
}

export function fetchClients(){
  return client.get('/clients');
}

export function fetchClient(clientId){
  return client.get(`/clients/${clientId}`);
}

export function fetchProductDetails(productId){
  return client.get(`/products/${productId}`);
}