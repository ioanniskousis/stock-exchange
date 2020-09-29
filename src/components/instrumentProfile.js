/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function InstrumentProfile(props) {
  const { instrument } = props;
  const {
    symbol,
    name,
    price,
    exchange,
  } = instrument;

  return (
    <div className="instrumentPanel">
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

InstrumentProfile.propTypes = {
  instrument: PropTypes.object,
};

InstrumentProfile.defaultProps = {
  instrument: null,
};
