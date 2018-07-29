import axios from 'axios';

function parseJSON(response) {
  return JSON.stringify(response.data);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function requestGetAPIData(url) {
  return axios.get(url)
    .then(checkStatus)
    .then(parseJSON);
}

export function requestPostAPIData(url, body) {
  return axios.post(url, body)
    .then(checkStatus)
    .then(parseJSON);
}
