import { appAlert } from '../utils';

export default async function downloadProfile(symbol, callback) {
  const api = 'https://financialmodelingprep.com/api/v3/profile/';
  const key = '?apikey=2d204314b27b541f159ab9757c0b8c78';
  const instrumentsURL = api.concat(symbol).concat(key);
  fetch(instrumentsURL)
    .then(response => response.json())
    .then(data => callback(data[0]))
    .catch(err => appAlert('downloadProfile', 'Error for symbol '.concat(symbol).concat(' :  ').concat(err)));
}
