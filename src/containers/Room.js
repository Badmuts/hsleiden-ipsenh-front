import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Moment from 'moment';
var BarChart = require("react-chartjs").Bar;

var chartData = {
    labels: [],
    datasets: [
        {
            fillColor: "#79D1CF",
            strokeColor: "#79D1CF",
            data: []
        }
    ]
};

var chartOptions = {
    scales: {
        yAxes: [{
            id: 'y-axis-1',
            display: true,
            position: 'left',
            scaleLabel:{
                display: true,
                labelString: 'Occupation',
            }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hour'
          }
        }],
    }
};
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

                var today = Moment().format('D');
                if(Moment(log.time).format('D') == today) {
                    chartData.labels.push(Moment(log.time).format('H'));
                    chartData.datasets[0].data.push(log.occupation)
                }
                
                return(
                <li>Occupation: {log.occupation} Time: {Moment(log.time).format('LLLL')}</li>
                );
            });
        }

        this.chart = function() {
            return <BarChart data={chartData} options={chartOptions}/>
        }
        return(
            <div className="Container p-30">
                <h2>Room</h2> 
                 {room ? (    
                <div className="pt-card pt-elevation-0 pt-interactive">
                    <h5>{room.name}</h5>
                    <ul>{this.logs()}</ul>
                    {this.chart()}
                </div>
            
             ) : (
                    <Spinner />
                )}
            </div>
            
        )
    }
}

export default Room