/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/actionsIndex';
// import Book from '../components/book';
// import CategoryFilter from '../components/CategoryFilter';

function filterdSymbols(symbols, filter) {
  return filter === 'All' ? symbols : symbols.filter(symbol => symbol.exchange === filter);
}

class SymbolsList extends React.Component {
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
    const rows = [];
    const { symbols } = this.props;
    const { filter } = this.state;
    const filteredSymbols = filterdSymbols(symbols, filter);

    filteredSymbols.map(symbol => rows.push(
      <div
        key={symbol.name}
        symbol={symbol}
      />,
    ));

    return (
      <div>
        {/* <CategoryFilter filterChanged={this.filterChanged} /> */}
        <div className="SymbolsList">
          {rows}
        </div>
      </div>
    );
  }
}

SymbolsList.propTypes = {
  symbols: PropTypes.array,
  // removeBook: PropTypes.func,
  // initBooks: PropTypes.func,
};

SymbolsList.defaultProps = {
  symbols: [],
  // removeBook: null,
  // initBooks: null,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  // removeBook: book => dispatch(removeBook(book)),
  // initBooks: state => dispatch(initBooks(state)),
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SymbolsList);
