import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        if(this.state.count>=1){
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    render() {
        return (
            <>
                <button className='m-5' onClick={this.increment}>click ++ </button>
                <p className='ms-5 ps-4'>{this.state.count}</p>
                <button className='m-5' onClick={this.decrement}>click -- </button>
            </>
        )
    }
}

export default ClassCounter