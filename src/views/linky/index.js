import React, { Component } from 'react'


import Tags from './tags'
import Links from './links'
import Header from '../../components/header'


import {store} from '../../store'
import {addCurrentPage, addQueryString,addQueryTag } from '../../actions/pageInfo';


export default class Linky extends Component {

    componentDidMount(){
        const {q,tag,page}=this.props.match.params;
        if(q) store.dispatch(addQueryString(q));

        if(tag) store.dispatch(addQueryTag(tag));
        if(page) store.dispatch(addCurrentPage(page));
    }

    render() {
        return (
            <React.Fragment>

                <Header />
               
               <div className="container">
                    <div className="row">
                    <Links/>
                    <Tags/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
