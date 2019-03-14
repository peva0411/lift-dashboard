import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  indicators: [],
  products: [],
  selectedIndicatorIndex: 0
};

 function dashboard (state = initialState, action){
  switch(action.type){
    case 'FETCH_INDICATORS_SUCCEEDED':{
      return {
        ...state,
        indicators: action.payload.indicators,
        products: action.payload.products
      };
    }
    case 'INDICATOR_SELECTED':{
      return {
        ...state,
        selectedIndicatorIndex: action.payload
      }
    }
    default:{
      return state;
    }
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  dashboard
});

