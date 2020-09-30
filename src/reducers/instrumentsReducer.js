const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const SHOW_PROFILE = 'SHOW_PROFILE';
const SHOW_LIST = 'SHOW_LIST';

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
      const top200 = action.instruments.slice(0, 200);
      const exchanges = unicExchanges(top200).sort((ex1, ex2) => (ex1 < ex2 ? -1 : 1));
      return {
        instruments: top200,
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
    case SHOW_PROFILE:
    {
      const instrument = JSON.parse(action.event.currentTarget.getAttribute('instrument'));

      return {
        instruments: state.instruments,
        exchanges: state.exchanges,
        filter: 'All Exchanges',
        instrument,
        view: 'profile',
      };
    }
    case SHOW_LIST:
    {
      return {
        instruments: state.instruments,
        exchanges: state.exchanges,
        filter: 'All Exchanges',
        view: 'List',
      };
    }
    default:
      return state;
  }
};

export default instrumentsReducer;
