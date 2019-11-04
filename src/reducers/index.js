import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  indicators: [],
  products: [],
  selectedIndicatorIndex: 0,
  selectedClientId: 1,
  badReviews: [],
  changeEvent: {}
};

 function dashboard (state = initialState, action){
  switch(action.type){
    case 'FETCH_INDICATORS_SUCCEEDED':{
      return {
        ...state,
        indicators: action.payload.indicators,
        products: action.payload.products,
        badReviews: action.payload.badReviews,
        changeEvent: action.payload.changeEvent
      };
    }
    case 'INDICATOR_SELECTED':{
      return {
        ...state,
        selectedIndicatorIndex: action.payload
      }
    }
    case 'SELECTED_CLIENT_CHANGED':{
      return {
        ...state,
        selectedClientId: action.payload.selectedClientId
      }
    }
   
    default:{
      return state;
    }
  }
}

function clients(state = {clients:[], client:{name: 'test', products:[]}}, action){
  switch(action.type){
    case 'FETCH_CLIENTS_SUCCEEDED':{
      return {
        ...state,
        clients: action.payload.clients
      }
    }
    case 'FETCH_CLIENT_SUCCEEDED':{
      return {
        ...state,
        ...action.payload
      }
    }
    default:{
      return state;
    }
  }
}

function products(state = {product:{details:{}}, productDetails:{productTitle:"",asin:"", bulletPoints: []}}, action){
  switch(action.type){
    case 'FETCH_PRODUCTDETAILS_SUCCEEDED':{
      return {
        ...state,
        ...action.payload
      }
    }
    default:{
      return state;
    }
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  dashboard,
  clients, 
  products
});

