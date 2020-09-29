/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeView } from '../actions/actionsIndex';

function InstrumentPanel(props) {
  const { instrument, viewChanged } = props;
  const {
    symbol,
    name,
    price,
    exchange,
  } = instrument;

  return (
    <div className="instrumentPanel" symbol={symbol} onClick={viewChanged}>
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
  instrument: PropTypes.object,
  viewChanged: PropTypes.func,
};

InstrumentPanel.defaultProps = {
  instrument: null,
  viewChanged: null,
};

const mapDispatchToProps = dispatch => ({
  viewChanged: symbol => dispatch(changeView(symbol)),
});

export default connect(null, mapDispatchToProps)(InstrumentPanel);
