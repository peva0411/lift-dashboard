import * as api from '../api';

export function fetchIndicatorsSucceeded(data){
  return {
    type: 'FETCH_INDICATORS_SUCCEEDED',
    payload:{
      indicators: data.indicators,
      products: data.productDetails,
      badReviews: data.badReviews,
      changeEvent: data.changeEvent
    }
  }
}

export function fetchClientsSucceeded(data){
  return {
    type: 'FETCH_CLIENTS_SUCCEEDED',
    payload:{
      clients: data.clients
    }
  }
}

export function fetchClientSucceded(data){
  return {
    type: 'FETCH_CLIENT_SUCCEEDED',
    payload:{
      client:data
    }
  }
}

export function fetchProductDetailsSucceded(data){
  return {
    type: 'FETCH_PRODUCTDETAILS_SUCCEEDED',
    payload:{
      productDetails : data
    }
  }
}

export function fetchIndicators(clientId){
 
  return dispatch => {
    const updatedClientId = clientId == 0 ? null : clientId;
    console.log("Fetching for " + updatedClientId);
    api.fetchIndicators(updatedClientId)
    .then(resp => {
      console.log(resp.data);
      dispatch(fetchIndicatorsSucceeded(resp.data));
    });
  }
}

export function indicatorSelected(index){
  return {
    type: 'INDICATOR_SELECTED',
    payload:index
  };
}

export function fetchClients(){
  return dispatch => {
    api.fetchClients()
    .then(resp => {
      dispatch(fetchClientsSucceeded(resp.data));
    });
  }
}

export function fetchClient(clientId){
  return dispatch => {
    api.fetchClient(clientId)
    .then(resp => {
      dispatch(fetchClientSucceded(resp.data));
    });
  }
}

export function fetchProductDetails(productId){
  return dispatch => {
    api.fetchProductDetails(productId)
    .then(response => {
      dispatch(fetchProductDetailsSucceded(response.data));
    });
  }
}

export function clientFilterSelected(clientId){
    console.log("Action " + clientId);
    return {
      type: 'SELECTED_CLIENT_CHANGED',
      payload:{
        selectedClientId: clientId
      }
    };
  
}