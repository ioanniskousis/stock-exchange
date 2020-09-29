import { appAlert } from '../utils';

export default async function downloadProfile(symbol, callback) {
  const api = 'https://financialmodelingprep.com/api/v3/profile/';
  const key = '?apikey=4573dfe2b2ba2f5c9fece2250212b8e4';
  const instrumentsURL = api.concat(symbol).concat(key);
  fetch(instrumentsURL)
    .then(response => response.json())
    .then(data => callback(data[0]))
    .catch(err => appAlert('downloadProfile', 'Error :  '.concat(err)));
}
