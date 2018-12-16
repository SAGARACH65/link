import React, { Component } from 'react'

import Header from '../../components/header'
import Links from './links'
export default class Linky extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
<Links/>
            </React.Fragment>
        )
    }
}
