import { connect } from 'react-redux';
import React, { Component } from 'react';

import { addQueryString } from '../../actions/pageInfo';

class SearchBar extends Component {
  handleChange = event => {
    this.props.addQueryString(event.target.value);
  };

  searchButtonPressHandler = () => {
    this.props.history.push(
      `/linky?page=1&q=${this.props.queryString.replace(' ', '%20')}`
    );
  };

  keyPressHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.searchButtonPressHandler();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='search-box-tags left'>
          <form>
            <img
              className='search-box__icon left'
              src={require('../../assets/search-icon.svg')}
              alt='Search'
              onClick={this.searchButtonPressHandler}
            />
            <input
              className='search-box__placeholder-tags left'
              value={this.props.queryString}
              placeholder='Enter search query'
              onChange={this.handleChange}
              preventDefault
              onKeyDown={this.keyPressHandler}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ pageInfo }) => ({
  queryString: pageInfo.q
});

const mapDispatchToProps = dispatch => ({
  addQueryString: currentString => {
    dispatch(addQueryString(currentString));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
