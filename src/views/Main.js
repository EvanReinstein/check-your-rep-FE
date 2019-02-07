import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    state = {
        zipcode: '',
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const zipcode = this.state.zipcode;

        axios({
            method: 'post',
            url: '/api/rep-info',
            baseURL: 'http://localhost:4000',
            data: {
                zipcode: zipcode
            }
        })
        .then(res => {console.log(res.data.officials)})
        .catch(err => {console.log(err)});
    }

    render() {
        return (
            <div>
                <h1>Main App Component</h1>
                <p>Form test: </p>
                <form className="search-form" action="post" onSubmit={this.handleSubmit}>
                    <label htmlFor="">Zipcode: </label>
                    <input
                    onInput={this.handleChange}
                    name="zipcode"
                    type="text"
                    id="zip-input"
                    placeholder="Enter your zipcode"
                    />
                    <button type="submit" className="search-form-button">Search</button>
                </form>
            </div>
        );
    }
};

export default Main;