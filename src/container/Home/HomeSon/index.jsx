/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/23
 Time: 23:37
 To change this template use File | Settings | File Templates.
 */
import React from 'react';
import BaseComponent from 'Utils/BaseComponent.jsx'
import {connect} from 'react-redux';

class HomeSon extends BaseComponent{

    constructor(props) {
        super(props);
    }

    render() {
        console.log(222);
        return (
            <div>
                <p>{this.props.addSonResult.getIn(['data'])}</p>
                <p>{this.props.num.getIn(['data'])}</p>
            </div>
        )

    }
}

export default connect((state) => {
    return {
        addSonResult: state.getIn(['HomeSonReducer'])
    }
})(HomeSon)