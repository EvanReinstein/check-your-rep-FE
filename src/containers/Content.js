import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import ZipForm from '../components/ZipForm';
import About from '../components/About';

class Content extends Component {
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
            <div className="content">
                <Switch>
                    <Route path="/" exact render={props => <ZipForm {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </div>
        )
    }
}

export default Content;