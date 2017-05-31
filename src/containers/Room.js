import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Moment from 'moment';
import { Bar as BarChart } from 'react-chartjs';
import _ from 'lodash'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class Room extends Component {
    constructor (props) {
        super(props)
        this.state = {
            room: null,
            startDate: Moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    
    componentDidMount() {
        console.log();
        fetch(`http://localhost:3000/buildings/${this.props.match.params.buildingId}/rooms/${this.props.match.params.roomId}`)
            .then(res => res.json())
            .then(room => {
                this.setState({ room: room })
            })
    }

    
    


    render() {
        Moment.locale('nl');
        const { room } = this.state

        var chartData = {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
            "19", "20", "21", "22", "23"],
            datasets: [
                {
                    label: 'Occupation',
                    fillColor: "#79D1CF",
                    strokeColor: "#79D1CF",
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    label: 'Expected Occupation',
                    fillColor: "#7af442",
                    strokeColor: "#7af442",
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                }
            ]
        };

        var chartOptions = {
            responsive: true,
            maintainAspectRatio: true,
        };

        this.logs = function() {
            return room.logs.map(log => {
                // var today = Moment().format('D');
                if(Moment(log.time).format('D') === this.state.startDate.format('D')) {

                //check if index is already filled with an occupation
                //if so calculate new average. else add occupation to data array
                if(chartData.datasets[0].data[Moment(log.time).format('H')] > 0) {
                    
                    var tempValueFromDataArray = chartData.datasets[0].data[Moment(log.time).format('H')];
                    var average = (log.occupation + tempValueFromDataArray) / 2;
                    
                    chartData.datasets[0].data[Moment(log.time).format('H')] = _.floor(average);
                } else {
                    chartData.datasets[0].data[Moment(log.time).format('H')] = log.occupation
                }

                }

     

                return(
                <li key={log.id}>Occupation: {log.occupation} Time: {Moment(log.time).format('LLLL')}</li>
                );
            },

            room.roster.map(roster => {
                if(Moment(roster.from).format('D') === this.state.startDate.format('D')) {                    
                        chartData.datasets[1].data[Moment(roster.from).format('H')] = roster.amount
                }
            })
            
            // chartData.labels = _.remove(chartData.labels, function(l) {
            //     console.log("ergreg: ", l)
            //     return l >= 8 && l <= 23;
            // })

            );
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
                    Kies een datum = <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
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