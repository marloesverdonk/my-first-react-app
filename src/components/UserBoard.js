import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
    render() {
        return (
            <div>
                <h1> { this.props.content } </h1>
                <h6>
                    <User name='Vie' />
                    <User name='Belle' />
                    <User name='Mika' />
                    <User name='Munchie' />
                    <User name='Peaches' />
                </h6>
            </div>)
    }
}
