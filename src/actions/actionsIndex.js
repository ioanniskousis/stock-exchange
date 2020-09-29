const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_VIEW = 'CHANGE_VIEW';

const initInstruments = instruments => ({
  type: INIT_INSTRUMENTS,
  instruments,
});

const changeFilter = event => ({
  type: CHANGE_FILTER,
  event,
});

const changeView = view => ({
  type: CHANGE_VIEW,
  view,
});

export {
  initInstruments,
  changeView,
  changeFilter,
};
