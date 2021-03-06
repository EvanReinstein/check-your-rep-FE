import React, { Component } from 'react';

// Component Imports
import NavBar from '../components/NavBar';
import Content from '../containers/Content';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <NavBar />
                <Content />
            </div>
        );
    }
};

export default Main;