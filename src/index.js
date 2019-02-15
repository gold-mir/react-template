import React from 'react';
import ReactDOM from 'react-dom';

var greeting = React.createElement('h1', {}, 'Hello, World!');

ReactDOM.render(
  greeting,
  document.getElementById('react-app-root')
)