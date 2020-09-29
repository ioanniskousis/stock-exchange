const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_VIEW = 'CHANGE_VIEW';

function unicExchanges(instruments) {
  const exch = [];
  for (let i = 0; i < instruments.length; i += 1) {
    if (!exch.includes(instruments[i].exchange)) {
      exch.push(instruments[i].exchange);
    }
  }
  return exch;
}

const instrumentsReducer = (state = {
  instruments: [],
  exchanges: [],
  filter: 'All Exchanges',
  view: 'List',
}, action) => {
  switch (action.type) {
    case INIT_INSTRUMENTS:
    {
      const top50 = action.instruments.slice(0, 50);
      const exchanges = unicExchanges(top50).sort((ex1, ex2) => (ex1 < ex2 ? -1 : 1));
      return {
        instruments: top50,
        exchanges,
        filter: 'All Exchanges',
        view: 'List',
      };
    }
    case CHANGE_FILTER:
    {
      return {
        instruments: state.instruments,
        exchanges: state.exchanges,
        filter: action.event.target.value,
        view: 'List',
      };
    }
    case CHANGE_VIEW:
    {
      const symbol = action.event.currentTarget.getAttribute('symbol');
      return {
        symbol,
        view: 'profile',
      };
    }
    default:
      return state;
  }
};

export default instrumentsReducer;
