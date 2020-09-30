/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect, useStore } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, showProfile } from '../actions/actionsIndex';
import '../App.css';
import InstrumentsListHeader from '../containers/instrumentsListHeader';
import InstrumentsList from '../containers/instrumentsList';
import InstrumentProfileHeader from '../containers/instrumentProfileHeader';
import InstrumentProfile from '../containers/instrumentProfile';

function App(props) {
  const store = useStore();
  const { exchangesData } = props;
  const { view } = exchangesData;

  if (view === 'List') {
    return (
      <div className="App">
        <InstrumentsListHeader />
        <InstrumentsList store={store} />
      </div>
    );
  }
  const { instrument } = exchangesData;
  return (
    <div className="App">
      <InstrumentProfileHeader instrument={instrument} />
      <InstrumentProfile instrument={instrument} />
    </div>
  );
}

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
  viewChanged: view => dispatch(showProfile(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
