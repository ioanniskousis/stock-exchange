/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Instrument(props) {
  const { instrument } = props;
  const {
    symbol,
    name,
    price,
    exchange,
  } = instrument;

  return (
    <div className="instrumentPanel">
      <div>
        {symbol}
      </div>
      <div>
        {name}
      </div>
      <div>
        {price}
      </div>
      <div>
        {exchange}
      </div>
    </div>
  );
}

Instrument.propTypes = {
  instrument: PropTypes.object,
};

Instrument.defaultProps = {
  instrument: null,
};
