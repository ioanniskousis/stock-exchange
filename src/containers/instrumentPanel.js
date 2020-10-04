import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function InstrumentPanel(props) {
  const { instrument } = props;
  const {
    symbol,
    name,
    price,
    exchange,
  } = instrument;
  return (
    <div className="instrumentPanel">
      <Link to={'/profile/'.concat(symbol)} className="linkTo" instrument={JSON.stringify(instrument)}>
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
      </Link>
    </div>
  );
}

InstrumentPanel.propTypes = {
  instrument: PropTypes.objectOf(PropTypes.any),
};

InstrumentPanel.defaultProps = {
  instrument: null,
};

export default InstrumentPanel;
