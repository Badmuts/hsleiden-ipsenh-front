import React from 'react';
import ReactDOM from 'react-dom';
import Buildings from './Buildings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Buildings />, div);
});
