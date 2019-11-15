import React from 'react';

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;

        this.setState({[name]: value});
    }

    render() {
        return(
            <form>
                <input type="email" name="email" id="email" placeholder="email" onChange={this.handleChange}/>
                <input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange}/>
                <button type="submit">Login</button>
            </form>
        )
    }
}