const INIT_SYMBOLS = 'INIT_SYMBOLS';

const symbolsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_SYMBOLS:
    {
      const top50 = action.state.slice(0, 50);
      return top50;
    }
    default:
      return state;
  }
};

export default symbolsReducer;
