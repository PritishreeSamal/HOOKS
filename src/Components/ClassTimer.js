import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <h3>Count Timer {this.state.timer}</h3>
                    <br />
                    <div class="d-grid gap-6 col-2 mx-auto">
                        <button class="btn btn-dark" type="button" onClick={() => clearInterval(this.interval)}>Stop</button>
                    </div>
                </div>

            </>
        )
    }
}
export default ClassTimer