import React, { Component } from 'react'

export default class Greet extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Art Khai',
        }
    }

    changeMessage(){
        this.setState({ 
            message: 'Just Die '
         })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=> this.changeMessage()}> Subscribe </button>
            </div>
        )
    }
}
