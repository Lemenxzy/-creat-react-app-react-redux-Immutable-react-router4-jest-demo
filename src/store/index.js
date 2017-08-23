import {createStore, applyMiddleware,compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import  ReducersStore from '../reducers'
//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
let store;

if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        combineReducers(ReducersStore),
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        combineReducers(ReducersStore),
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}



export default store;