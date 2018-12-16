
import React, { Component } from 'react'

import Tags from './tags'
import Links from './links'

export default class Body extends Component {
    render() {
        return (
<React.Fragment>

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

