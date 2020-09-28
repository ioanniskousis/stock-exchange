const INIT_SYMBOLS = 'INIT_SYMBOLS';

const symbolsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_SYMBOLS:
    {
      // alert(JSON.stringify(action.state[0]));
      return action.state;
    }
    default:
      return state;
  }
};

export default symbolsReducer;
