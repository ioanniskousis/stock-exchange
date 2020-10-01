import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/actionsIndex';
import InstrumentPanel from './instrumentPanel';

function filterdInstruments(instruments, filter) {
  return filter === 'All Exchanges' ? instruments : instruments.filter(instrument => instrument.exchange === filter);
}

function InstrumentsList(props) {
  document.body.style.cursor = 'default';
  const { exchangesData } = props;
  const { instruments, filter } = exchangesData;

  const instrumentPanels = [];
  const filteredInstruments = filterdInstruments(instruments, filter);
  filteredInstruments.map(instrument => instrumentPanels.push(
    <InstrumentPanel key={instrument.symbol} instrument={instrument} />,
  ));

  return (
    <div className="instrumentsList">
      {instrumentPanels}
    </div>
  );
}

InstrumentsList.propTypes = {
  exchangesData: PropTypes.objectOf(PropTypes.any),
};

InstrumentsList.defaultProps = {
  exchangesData: null,
};

const mapStateToProps = state => ({
  exchangesData: state.exchangesData,
});

const mapDispatchToProps = dispatch => ({
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsList);
