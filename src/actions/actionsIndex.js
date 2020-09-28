/* eslint-disable import/prefer-default-export */
const INIT_SYMBOLS = 'INIT_SYMBOLS';

const initSymbols = state => ({
  type: INIT_SYMBOLS,
  state,
});

export {
  initSymbols,
};
