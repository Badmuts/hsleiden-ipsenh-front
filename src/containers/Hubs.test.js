import React from 'react';
import ReactDOM from 'react-dom';
import Hubs from './Hubs';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Hubs />
    </MemoryRouter>,
    div
  );
});
