import React, { Component } from 'react'

export default class ClassTakeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                firstName: '',
                lastName: ''
            }
        }
        this.FirstNameChanged = this.FirstNameChanged.bind(this);
        this.LastNameChanged = this.LastNameChanged.bind(this);
    };
    FirstNameChanged(e) {
        this.setState({
            name: {
                firstName: e.target.value,
                lastName: this.state.name.lastName
            }
        })
    };
    LastNameChanged(e) {
        this.setState({
            name: {
                firstName: this.state.name.firstName,
                lastName: e.target.value
            }
        })
    };
    render() {
        return (
            <><div className='ms-5 mt-5'>
                <dl>
                    <dt>First Name</dt>
                    <dd><input type="text" onChange={this.FirstNameChanged} /></dd>
                    <dt>Last Name</dt>                   
                    <dd><input type="text" onChange={this.LastNameChanged} /></dd>
                </dl>
                <dl className="row">
                    <dd className="col-10">{this.state.name.firstName}</dd>
                    <dd className="col-10">{this.state.name.lastName}</dd>
                </dl>
            </div>
            </>
        )
    }
}

