import React, { Component } from 'react'
import { connect } from 'react-redux';

// import {  } from '../../actions';

export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="search-box-tags left">
                            <form>
                                <img
                                    className="search-box__icon left"
                                    src={require("../../assets/search-icon.svg")}
                                    alt="Search"
                                />
                                <input
                                    className="search-box__placeholder-tags left"
                                    type="text"
                                    placeholder="Enter search query"
                                />
                            </form>
                        </div>
            </React.Fragment>
        )
    }
}
