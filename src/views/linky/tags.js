import React, { Component } from 'react'

import Links from './links'
import Header from '../../components/header'
import { PlusIcon } from '../../components/icons';

export default class Linky extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="col-lg-tags col-sm-12">
    <div className="block-set">
      <div className="block-set__header">
        <h3 className="left">Tags</h3>
        <button type="button" className="right btn btn--alternate btn--curved">
        
          <PlusIcon width={20} height={21} />
        </button>
      </div>
      <div className="block-set__content">
        {/* <div className="no-content-wrapper">
          <div className="no-content">
            <div className="no-content__text">Currently no team members added.</div>
          </div>
        </div> */}
         <button className="tag tag-linky tag--xsm tag-linky--xsm">React</button>
         <button className="tag tag-linky tag--xsm tag-linky--xsm">Machine Learning</button>
         <button className="tag tag-linky tag--xsm tag-linky--xsm">Agile</button>
      </div>    
    </div>
  </div>
            </React.Fragment>
        )
    }
}
