import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import {MemoryRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const params = {
      buildingId: "",
      roomId: ""
  };
  ReactDOM.render(
    <MemoryRouter>
      <Route render={(params) => (    
          <Room {...params}/>
      )}/>
    </MemoryRouter>, div )
});