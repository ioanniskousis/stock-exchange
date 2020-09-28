/* eslint-disable no-alert */
import { initSymbols } from '../actions/actionsIndex';

async function downloadSymbols(store) {
  document.body.style.cursor = 'wait';
  const symbolsURL = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=061a493fc95788943cd8156ce6456bea';
  fetch(symbolsURL)
    .then(response => response.json())
    .then(data => {
      const sortedSymbols = data.sort((a, b) => ((a.symbol < b.symbol) ? -1 : 1));
      store.dispatch(initSymbols(sortedSymbols));
    })
    .catch(err => alert('Error : '.concat(err)));
}

export default downloadSymbols;