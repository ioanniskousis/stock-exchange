/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showProfile } from '../actions/actionsIndex';

function InstrumentPanel(props) {
  const { instrument, viewChanged, store } = props;
  const {
    symbol,
    name,
    price,
    exchange,
  } = instrument;

  return (
    <div
      className="instrumentPanel"
      store={store}
      instrument={JSON.stringify(instrument)}
      onClick={viewChanged}
    >
      <div className="instrumentSymbol">
        {symbol}
      </div>
      <div className="instrumentName">
        {name}
      </div>
      <div className="instrumentPrice">
        {price}
      </div>
      <div className="instrumentExchange">
        {exchange}
      </div>
    </div>
  );
}

InstrumentPanel.propTypes = {
  instrument: PropTypes.objectOf(PropTypes.any),
  store: PropTypes.objectOf(PropTypes.any),
  viewChanged: PropTypes.func,
};

InstrumentPanel.defaultProps = {
  instrument: null,
  store: null,
  viewChanged: null,
};

const mapDispatchToProps = dispatch => ({
  viewChanged: symbol => dispatch(showProfile(symbol)),
});

export default connect(null, mapDispatchToProps)(InstrumentPanel);
