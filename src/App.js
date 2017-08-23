import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {AsyncComponent} from 'Utils/asyncComponent.jsx'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={AsyncComponent('Home')} />
          <Route path="/login" component={AsyncComponent('Login')} />
          <Route path="/register" component={AsyncComponent('Register')} />
        </Switch>
    );
  }
}
export default App;
