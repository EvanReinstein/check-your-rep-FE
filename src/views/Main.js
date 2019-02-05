import React, { Component } from 'react';

class Main extends Component {
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>Main App Component</h1>
                <p>Form test: </p>
                <form className="search-form" action="post">
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