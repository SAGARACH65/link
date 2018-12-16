
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import SearchBar from './searchBar';

import { addLinks } from '../../actions/links';

 class Links extends Component {

  static propTypes = {
    addLinks: PropTypes.func.isRequired, 
}

 async  componentDidMount(){
// let response=await get
  }

    render() {
        return (
<React.Fragment>
<div className="col-lg-links col-sm-12">
    <div className="block-set">
      <div className="block-set__header">
        <h3 className="left">Links</h3>
<SearchBar/>
      </div>
     
      <div className="block-set__content">
        <ul className="block-set__list">
          <li>
            <div className="left block-set__list--left">Status</div>
            <div className="left block-set__list--right">
              <span className="icon-status icon-status--green"></span>Healthy
            </div>
          </li>  
        </ul>
      </div>

    </div>
  </div>
 
</React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  addLinks: links => { dispatch(addLinks(links)) }
});

export default connect(null, mapDispatchToProps)(Links);

