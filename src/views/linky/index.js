import React, { Component } from 'react'


import Tags from './tags'
import Links from './links'
import Header from '../../components/header'


import {store} from '../../store'
import {addCurrentPage, addQueryString,addQueryTag } from '../../actions/pageInfo';


export default class Linky extends Component {

    componentDidMount(){
        const {q,tag,page}=this.props.match.params;
        console.log(this.props.match.params)

        if(q) store.dispatch(addQueryString(q));
        if(tag) store.dispatch(addQueryTag(tag));
       

        //if no page give default to page 1
        (page) ?store.dispatch(addCurrentPage(page)): this.props.history.push('/linky?page=1');
    }

    render() {
        return (
            <React.Fragment>

                <Header />
               
               <div className="container">
                    <div className="row">
                    <Links history={this.props.history}/>
                    <Tags history={this.props.history}/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
