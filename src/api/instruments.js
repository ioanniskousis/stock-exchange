import { initInstruments } from '../actions/actionsIndex';
import { appAlert } from '../utils';

async function downloadInstruments(store) {
  document.body.style.cursor = 'wait';
  const instrumentsURL = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=4573dfe2b2ba2f5c9fece2250212b8e4';
  fetch(instrumentsURL)
    .then(response => response.json())
    .then(data => {
      const sortedInstruments = data.sort((a, b) => ((a.symbol < b.symbol) ? -1 : 1));
      store.dispatch(initInstruments(sortedInstruments));
    })
    .catch(err => appAlert('downloadInstruments', 'Error :  '.concat(err)));
}

export default downloadInstruments;
