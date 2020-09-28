/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/actionsIndex';
import Instrument from '../components/instrumentView';
// import CategoryFilter from '../components/CategoryFilter';

function filterdInstruments(instruments, filter) {
  return filter === 'All' ? instruments : instruments.filter(instrument => instrument.exchange === filter);
}

class InstrumentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
    this.filterChanged = this.filterChanged.bind(this);
  }

  filterChanged(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    document.body.style.cursor = 'default';
    const instrumentPanels = [];
    const { instruments } = this.props;
    // if (instruments.length > 0) alert(JSON.stringify(instruments[20]));
    const { filter } = this.state;
    const filteredInstruments = filterdInstruments(instruments, filter);
    // if (filteredInstruments.length > 0) alert(JSON.stringify(filteredInstruments[20]));
    filteredInstruments.map(instrument => instrumentPanels.push(
      <Instrument key={instrument.symbol} instrument={instrument} />,
    ));

    return (
      <div className="instrumentsList">
        {instrumentPanels}
      </div>
    );
  }
}

InstrumentsList.propTypes = {
  instruments: PropTypes.array,
  // removeBook: PropTypes.func,
  // initBooks: PropTypes.func,
};

InstrumentsList.defaultProps = {
  instruments: [],
  // removeBook: null,
  // initBooks: null,
};

const mapStateToProps = state => ({
  instruments: state.instruments,
});

const mapDispatchToProps = dispatch => ({
  // removeBook: book => dispatch(removeBook(book)),
  // initBooks: state => dispatch(initBooks(state)),
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsList);
