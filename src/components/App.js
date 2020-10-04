import React from 'react';
import { connect, useStore } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { changeFilter } from '../actions/actionsIndex';
import '../App.css';
import ListView from '../containers/listView';
import ProfileView from '../containers/profileView';

function App() {
  const store = useStore();

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListView} store={store} />
          <Route path="/profile/:symbol" component={ProfileView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => ({
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(App);
