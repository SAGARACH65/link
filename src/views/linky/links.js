
import React, { Component } from 'react'

import SearchBar from './searchBar'
import Tags from './tags'

export default class Links extends Component {
    render() {
        return (
<React.Fragment>

<div className="container">
<div className="row">
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
 
 <Tags/>
 
</div>
</div>
</React.Fragment>
        )
    }
}

