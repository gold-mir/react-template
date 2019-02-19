import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

//import components
import Test from './test'

let stuff = ["Cat", "Dog", "Bunny"]

function App(){
  return (
    <div>
      <h1>Template</h1>
      <Switch>
        <Route exact path="/" render={(props) => {
          return (<h3>Hello World!</h3>)
        }} />
        <Route exact path="/test" component={Test}/>
      </Switch>
    </div>
  );
}

export default App;