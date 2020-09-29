/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, changeView } from '../actions/actionsIndex';
import '../App.css';
import InstrumentsListHeader from './instrumentsListHeader';
import InstrumentsList from '../containers/instrumentsList';

function App(props) {
  // alert(Object.keys(props));
  const { exchangesData } = props;
  const { view } = exchangesData;
  // alert(view);

  if (view === 'List') {
    return (
      <div className="App">
        <InstrumentsListHeader />
        <InstrumentsList />
      </div>
    );
  }
  const { symbol } = exchangesData;
  alert(symbol);
  return (
    <div className="App">
      <InstrumentsListHeader />
      <InstrumentsList />
    </div>
  );
}

// export default App;

App.propTypes = {
  exchangesData: PropTypes.object,
};

App.defaultProps = {
  exchangesData: null,
};

const mapStateToProps = state => ({
  exchangesData: state.exchangesData,
});

const mapDispatchToProps = dispatch => ({
  filterChanged: filter => dispatch(changeFilter(filter)),
  viewChanged: view => dispatch(changeView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
