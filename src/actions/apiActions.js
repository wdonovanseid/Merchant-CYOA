import * as c from './ActionTypes';

export const requestLocation = () => ({
  type: c.REQUEST_LOCATION
});

export const getLocationSuccess = (location) => ({
  type: c.GET_LOCATION_SUCCESS,
  location
});

export const getLocationFailure = (error) => ({
  type: c.GET_LOCATION_FAILURE,
  error
});

export const makeGetApiCall = () => {
  return dispatch => {
    dispatch(requestLocation);
    return fetch("http://localhost:5000/api/locations", {
      method: 'GET',
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getLocationSuccess(jsonifiedResponse));
      })
    .catch((error) => {
      dispatch(getLocationFailure(error));
    });
  }
}