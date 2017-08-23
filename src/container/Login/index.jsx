/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/22
 Time: 11:16
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import {Route} from 'react-router-dom'
import {AsyncComponent} from 'Utils/asyncComponent.jsx'
export default class Login extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                222222222222
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <p>asdasdasd</p>
                <Route path={this.props.match.url+"/son"} component={AsyncComponent('Login/Son')} />
            </div>
        )

    }
}