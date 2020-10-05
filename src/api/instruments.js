import { initInstruments } from '../actions/actionsIndex';
import { appAlert } from '../utils';

async function downloadInstruments(store) {
  document.body.style.cursor = 'wait';
  const instrumentsURL = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=2d204314b27b541f159ab9757c0b8c78';
  fetch(instrumentsURL)
    .then(response => response.json())
    .then(data => {
      const sortedInstruments = data.sort((a, b) => ((a.symbol < b.symbol) ? -1 : 1));
      store.dispatch(initInstruments(sortedInstruments));
    })
    .catch(err => appAlert('downloadInstruments', 'Error :  '.concat(err)));
}
export default downloadInstruments;
