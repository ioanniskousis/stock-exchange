import { initInstruments } from '../actions/actionsIndex';
// import { appAlert } from '../utils';

// async
function downloadInstruments(store) { 
  // document.body.style.cursor = 'wait';
  // const instrumentsURL =
  // 'https: //financialmodelingprep.com/api/v3/stock/list?apikey=4573dfe2b2ba2f5c9fece2250212b8e4';
  // fetch(instrumentsURL)
  //   .then(response => response.json())
  //   .then(data => {
  //     const sortedInstruments = data.sort((a,  b) => ((a.symbol < b.symbol) ? -1 :  1));
  //     store.dispatch(initInstruments(sortedInstruments));
  //    })
  //   .catch(err => appAlert('downloadInstruments',  'Error :  '.concat(err)));

  const sortedInstruments = [
    {
      symbol: '2CRSI.PA', name: '2Crsi SA', price: 3.18, exchange: 'Paris',
    },
    {
      symbol: 'A', name: 'Agilent Technologies Inc', price: 99.51, exchange: 'New York Stock Exchange',
    },
    {
      symbol: 'AA', name: 'Alcoa Corp', price: 12.24, exchange: 'New York Stock Exchange',
    },
    {
      symbol: 'AAA.AS', name: 'AP Alternative Assets LP', price: 0.07, exchange: 'Amsterdam',
    },
    {
      symbol: 'AAAU', name: 'Perth Mint Physical Gold ETF', price: 18.75, exchange: 'NYSEArca',
    },
    {
      symbol: 'AAB.TO', name: 'Aberdeen International Inc', price: 0.045, exchange: 'Toronto',
    },
    {
      symbol: 'AABA', name: 'Altaba Inc.', price: 19.63, exchange: 'Nasdaq Global Select',
    },
    {
      symbol: 'AAC', name: 'AAC Holdings Inc.', price: 1, exchange: 'New York Stock Exchange',
    },
    {
      symbol: 'AACG', name: 'ATA Creativity Global', price: 1.17, exchange: 'NasdaqGM',
    },
    {
      symbol: 'AACQU', name: 'Artius Acquisition Inc.', price: 10.48, exchange: 'NasdaqGS',
    },
    {
      symbol: 'AADBX', name: 'American Beacon Balanced Fund Institutional Class', price: 14.3, exchange: 'Nasdaq',
    },
    {
      symbol: 'AADR', name: 'AdvisorShares Dorsey Wright ADR', price: 54.9869, exchange: 'NYSE Arca',
    },
    {
      symbol: 'AAIEX', name: 'American Beacon International Equity Fund Institutional Class', price: 15.21, exchange: 'Nasdaq',
    },
    {
      symbol: 'AAISX', name: 'American Beacon International Equity Fund Advisor Class', price: 15.43, exchange: 'Nasdaq',
    },
    {
      symbol: 'AAL', name: 'American Airlines Group Inc', price: 12.76, exchange: 'Nasdaq Global Select',
    },
  ];
  store.dispatch(initInstruments(sortedInstruments));
}

export default downloadInstruments;
