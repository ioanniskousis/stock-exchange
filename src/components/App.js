import React from 'react';
import { connect, useStore } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { changeFilter, showProfile } from '../actions/actionsIndex';
import '../App.css';
import ListView from '../containers/listView';

import InstrumentsListHeader from '../containers/instrumentsListHeader';
import InstrumentsList from '../containers/instrumentsList';
import InstrumentProfileHeader from '../containers/instrumentProfileHeader';
import InstrumentProfile from '../containers/instrumentProfile';

function App(props) {
  const store = useStore();
  const { exchangesData } = props;
  const { view } = exchangesData;
  const { instrument } = exchangesData;
  // if (view === 'List') {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={ListView} store={store} />
        <Route path="/" component={ListView} store={store} />
        {/* <ListView store={store} /> */}
        {/* <InstrumentsListHeader />
        <InstrumentsList store={store} /> */}
      </div>
    </BrowserRouter>
  );
  // }
  // const { instrument } = exchangesData;
  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <InstrumentProfileHeader instrument={instrument} />
  //       <InstrumentProfile instrument={instrument} />
  //     </div>
  //   </BrowserRouter>
  // );
}

App.propTypes = {
  exchangesData: PropTypes.objectOf(PropTypes.any),
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
