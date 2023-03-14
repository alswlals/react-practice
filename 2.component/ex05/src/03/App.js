import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state={date: new Date()};
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
    }
    
    componentwillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={('0' + (this.state.date.getHours() > 12 ? this.state.date.getHours() - 12 : this.state.date.getHours())).slice(-2)}
                        minutes={('0'+this.state.date.getMinutes()).slice(-2)}
                        seconds={('0'+this.state.date.getSeconds()).slice(-2)} 
                        session={this.state.date.getHours() > 12 ? 'pm' : 'am'}
                        />
            </div>
        );
    }
}