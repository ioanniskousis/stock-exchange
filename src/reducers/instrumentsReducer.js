const INIT_INSTRUMENTS = 'INIT_INSTRUMENTS';

const instrumentsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_INSTRUMENTS:
    {
      const top50 = action.state.slice(0, 50);
      return top50;
    }
    default:
      return state;
  }
};

export default instrumentsReducer;
