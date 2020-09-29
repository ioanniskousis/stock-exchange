const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const SHOW_PROFILE = 'SHOW_PROFILE';
const SHOW_LIST = 'SHOW_LIST';

const initInstruments = instruments => ({
  type: INIT_INSTRUMENTS,
  instruments,
});

const changeFilter = event => ({
  type: CHANGE_FILTER,
  event,
});

const showProfile = event => ({
  type: SHOW_PROFILE,
  event,
});

const showList = () => ({
  type: SHOW_LIST,
});

export {
  initInstruments,
  showProfile,
  showList,
  changeFilter,
};
