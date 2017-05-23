import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';

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
    
    render() {
        const { rooms } = this.state
        return (
            <div className="Container p-30">
                <h2>Rooms</h2>
                {rooms ? (
                    rooms.map(room => (
                        <div className="pt-card pt-elevation-0 pt-interactive">
                            <h5>{room.name}</h5>
                            <p>Occupation: {room.occupation}</p>
                        </div>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        )
    }
}

export default Rooms