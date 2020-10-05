import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/actionsIndex';
import ExchangeFilter from '../components/exchangeFilter';

function InstrumentsListHeader(props) {
  const { exchangesData, filterChanged } = props;
  const { exchanges, filter } = exchangesData;
  return (
    <header>
      <div className="headerContainer">
        <div className="headerContainer-left">
          <div className="survey-label">
            Stock Exchange Survey
          </div>
        </div>
        <div className="headerContainer-right">
          <ExchangeFilter
            filterChanged={filterChanged}
            exchanges={exchanges}
            filter={filter}
          />
        </div>
      </div>
    </header>
  );
}

InstrumentsListHeader.propTypes = {
  exchangesData: PropTypes.objectOf(PropTypes.any),
  filterChanged: PropTypes.func,
};

InstrumentsListHeader.defaultProps = {
  exchangesData: null,
  filterChanged: null,
};

const mapStateToProps = state => ({
  exchangesData: state.exchangesData,
});

const mapDispatchToProps = dispatch => ({
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsListHeader);
