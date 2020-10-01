import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showList } from '../actions/actionsIndex';

function InstrumentProfileHeader(props) {
  const { instrument, viewChanged } = props;
  const {
    symbol,
    name,
  } = instrument;

  return (
    <header>
      <div className="headerContainer">
        <div className="headerContainer-left">
          <button type="button" className="backToSurvey" onClick={viewChanged}>Back to Survey</button>
          <div className="survey-label">
            {symbol}
          </div>
        </div>
        <div className="headerContainer-right">
          {name}
        </div>
      </div>
    </header>
  );
}

InstrumentProfileHeader.propTypes = {
  instrument: PropTypes.objectOf(PropTypes.any),
  viewChanged: PropTypes.func,
};

InstrumentProfileHeader.defaultProps = {
  instrument: null,
  viewChanged: null,
};

const mapDispatchToProps = dispatch => ({
  viewChanged: symbol => dispatch(showList(symbol)),
});

export default connect(null, mapDispatchToProps)(InstrumentProfileHeader);
