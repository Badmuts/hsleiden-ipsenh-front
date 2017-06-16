import React, { Component } from 'react';
import Header from './../components/Header';
import Nav from './../components/Nav.js';

const style = {
  padding: '30px 50px'
};

class Home extends Component {
  renderNav() {
    return <Nav />;
  }

  render() {
    return (
      <div>
        <Header topNav={this.renderNav()} />
        <div style={style}>
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            dolor, labore repudiandae, officia assumenda quia incidunt totam
            aperiam adipisci suscipit quo est soluta nobis doloremque ea veniam
            quas rem cum.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
