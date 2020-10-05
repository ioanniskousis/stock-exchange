import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/actionsIndex';

function ExchangeFilter(props) {
  const { exchangesData, filterChanged } = props;
  const { exchanges, filter } = exchangesData;
  const exchangeOptions = [];
  exchangeOptions.push(
    <option key={0} value="All Exchanges">All Exchanges</option>,
  );
  let index = 1;
  exchanges.map(exchangeyName => {
    index += 1;
    return exchangeOptions.push(
      <option key={index} value={exchangeyName}>
        {exchangeyName}
      </option>,
    );
  });

  return (
    <div className="exchangeContainer">
      <select name="exchange" id="exchange" value={filter} onChange={filterChanged}>
        {exchangeOptions}
      </select>
    </div>
  );
}

ExchangeFilter.propTypes = {
  exchangesData: PropTypes.objectOf(PropTypes.any),
  filterChanged: PropTypes.func,
};

ExchangeFilter.defaultProps = {
  exchangesData: null,
  filterChanged: null,
};

const mapStateToProps = state => ({
  exchangesData: state.exchangesData,
});

const mapDispatchToProps = dispatch => ({
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeFilter);
