export const makeGetApiCall = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch("http://localhost:5000/api/locations", {
      method: 'GET',
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}