/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/22
 Time: 11:16
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import {add} from 'Actions'
import {connect} from 'react-redux';
import {Map} from 'immutable';
import BaseComponent from 'Utils/BaseComponent.jsx'
class Home extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            data:Map({
                num:0
            })
        }
    }

    numaddd = (data)=>{
        this.props.dispatch(add(data));
        this.setState({ data: this.state.data.update('num', v => v + 1) });
    };

    render() {
        return (
            <div>
                <a href="javascript:void(0)" onClick={this.numaddd.bind(this,this.props.addResult.get('data'))}>点我</a>
                <p>{this.props.addResult.get('data')}</p>
                <p>{this.state.data.getIn(['num'])}</p>
            </div>
        )

    }
}



export default connect((state) => {
    return {
        addResult: state.getIn(['HomeReducer'])
    }
})(Home)
