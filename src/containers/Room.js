import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Moment from 'moment';

class Room extends Component {
    state = {room: null}

    componentDidMount() {
        console.log();
        fetch(`http://localhost:3000/buildings/${this.props.match.params.buildingId}/rooms/${this.props.match.params.roomId}`)
            .then(res => res.json())
            .then(room => {
                this.setState({ room })
            })
    }
    


    render() {
        Moment.locale('nl');
        const { room } = this.state
        
        this.logs = function() {
            return room.logs.map(log => {
                return(
                <li>Occupation: {log.occupation} Time: {Moment(log.time).format('LLLL')}</li>
                );
            });
        }
        return(
            <div className="Container p-30">
                <h2>Room</h2> 
                 {room ? (    
                <div className="pt-card pt-elevation-0 pt-interactive">
                    <h5>{room.name}</h5>
                    <ul>{this.logs()}</ul>
                </div>
            
             ) : (
                    <Spinner />
                )}
            </div>
        )
    }
}

export default Room