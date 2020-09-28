const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';
const CHANGE_FILTER = 'CHANGE_FILTER';

const initInstruments = state => ({
  type: INIT_INSTRUMENTS,
  state,
});

const changeFilter = selectedFilter => ({
  type: CHANGE_FILTER,
  selectedFilter,
});

export {
  initInstruments,
  changeFilter,
};
