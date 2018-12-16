import React, { Component } from 'react'

import Header from '../../components/header'
import Body from './body'
export default class Linky extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
<Body/>
            </React.Fragment>
        )
    }
}
