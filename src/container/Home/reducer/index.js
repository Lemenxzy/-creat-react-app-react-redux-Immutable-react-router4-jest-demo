import * as reducerType from 'Utils/reducerType.js'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    data:0
});

export default (state = initialState, action) => {
    switch (action.type) {
        case reducerType.ADD:
            return Immutable.Map({
                data:action.data
            });
        default:
            return state;
    }
};