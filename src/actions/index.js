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

export function fetchIndicators(){
  console.log('Fetching indicators')
  return dispatch => {
    api.fetchIndicators()
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