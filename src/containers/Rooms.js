import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import Header from './../components/Header';
import Nav from './../components/Nav';

const style = {
  padding: '30px 50px'
};

class Rooms extends Component {
    state = {rooms: null}

    componentDidMount() {
        console.log();
        fetch(`http://localhost:3000/buildings/${this.props.match.params.buildingId}/rooms`)
            .then(res => res.json())
            .then(rooms => {
                this.setState({ rooms })
            })
    }
    

    renderNav() {
      return (<Nav />)
    }

    render() {
        const { rooms } = this.state
           

        return (
             <div>
                <Header topNav={this.renderNav()} title="Rooms">
                    <nav className="pt-navbar">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-input-group .modifier">
                                <span className="pt-icon pt-icon-filter"></span>
                                <input type="text" className="pt-input" placeholder="Zoeken..." />
                            </div>
                        </div>
                    </nav>
                </Header>

            <div style={style}>
                <h2>Rooms</h2>
                {rooms ? (
                    rooms.map(room => (
                        <Link to={`/rooms/${this.props.match.params.buildingId}/rooms/${room.id}`}>
                            <div className="pt-card pt-elevation-0 pt-interactive">
                                <h5>{room.name}</h5>
                                <p>Occupation: {room.occupation}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
        )
    }
}

export default Rooms