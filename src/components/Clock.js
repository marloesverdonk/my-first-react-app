import React, { Component } from 'react'


export default class Clock extends Component {

    constructor() {
        super()
        this.state = { time: new Date() }
    }

    currentTime(){
        this.setState({
            time: new Date()
        })
    }

    componentDidMount(){
        setInterval(() => this.currentTime(), 1000)
    }

    // addZero(i) {
    //     if (i < 10) {
    //       i = "0" + i;
    //     }
    //     return i;
    //   }

    render() {
        return (<div style={{backgroundColor: "white"}}>
            {/* {this.state.time.toLocaleTimeString()}<br /> */}
            {/* <span>17</span>:<span>12</span>:<span>25</span> */}
            <span style={{color: "blue"}}>{this.state.time.getHours()}</span>:
            <span style={{color: "orange"}}>{this.state.time.getMinutes()}:</span>
            <span style={{color: "red"}}>{this.state.time.getSeconds()}</span>
           

        </div >)
    }
}




