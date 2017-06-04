import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Header from './../components/Header';
import HeaderWidget from './../components/HeaderWidget';
import Moment from 'moment';
import {Bar} from 'react-chartjs-2'
import _ from 'lodash'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { room } from './../endpoints/buildings';



class Room extends Component {
    state = {
        room: null,
        err: null,
        startDate: Moment()
    };
    
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    
    componentDidMount() {
        // fetch(`http://localhost:3000/buildings/${this.props.match.params.buildingId}/rooms/${this.props.match.params.roomId}`)
        //     .then(res => res.json())
        //     .then(room => {
        //         this.setState({ room: room})
        //     })

        room(this.props.match.params.buildingId, this.props.match.params.roomId)
            .then(room => this.setState({ room: room }))
            .catch(err => this.setState({ err: err }))
    }

    
    


    render() {
        Moment.locale('nl');
        const {room} = this.state

        var chartData = {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
            "19", "20", "21", "22", "23"],
            datasets: [
                {
                    label: 'Occupation',
                    backgroundColor: "#79D1CF",
                    borderColor: "#79D1CF",
                    borderWidth: 1,
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    label: 'Expected Occupation',
                    backgroundColor: "#7af442",
                    borderColor: "#7af442",
                    borderWidth: 1,
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                }
            ]
        };

        this.logs = function() {
            var startDate = this.state.startDate;

            _.forEach(room.logs, function(log) {

                if(Moment(log.time).format('D') === startDate.format('D')) {
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

            }, startDate);

            _.forEach(room.roster, function(value) {
                if(Moment(value.from).format('D') === startDate.format('D')) {                    
                    chartData.datasets[1].data[Moment(value.from).format('H')] = value.amount
                }

            }, startDate);


            chartData.labels = chartData.labels.splice(7,23)
            chartData.datasets[0].data = chartData.datasets[0].data.splice(7,23)
            chartData.datasets[1].data = chartData.datasets[1].data.splice(7,23)

           
        };

        this.header = function() {
            return room ? (
                <Header title={room.name}>
                    <div className="row">
                        <HeaderWidget label="size" icon="zoom-to-fit" value={room.size}/>
                        <HeaderWidget label="max capacity" icon="warning-sign" value={room.maxCapacity}/>
                        <HeaderWidget label="occupation" icon="info-sign" value={room.occupation}/>
                    </div>
                </Header>
            ) : (
                    <div></div>
                )
        };

        this.chart = function() {
            return (
                <div>
                    <Bar
                        data={chartData}
                        options={{
                            responsive:true,
                            scaleBeginAtZero:true,
                            barBeginAtOrigin:true,
                            maintainAspectRatio: true,
                            scales: {
                                yAxes:[{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}
                    />
                </div>
                );
            };
        return(
            <div>
            {this.header()}
            
            <div className="Container p-30"> 
                 {room ? (    
                <div className="pt-card pt-elevation-0 pt-interactive">
                    <div className="row">
                        <div className="col-xs">
                            <div className="box pt-form-group">
                                <label className="pt-label" htmlFor="example-form-group-input-a">
                                    Kies een datum
                                </label>
                                <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-calendar"></i></span>
                                   <DatePicker className="pt-form-control"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>{this.logs()}</ul>
                    {this.chart()}
                </div>
            
             ) : (
                    <Spinner />
                )}
            </div>
            </div>

        )
    }
}

export default Room