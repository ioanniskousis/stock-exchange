const INIT_SYMBOLS = 'INIT_SYMBOLS';
const CHANGE_FILTER = 'CHANGE_FILTER';

const initSymbols = state => ({
  type: INIT_SYMBOLS,
  state,
});

const changeFilter = selectedFilter => ({
  type: CHANGE_FILTER,
  selectedFilter,
});

export {
  initSymbols,
  changeFilter,
};
