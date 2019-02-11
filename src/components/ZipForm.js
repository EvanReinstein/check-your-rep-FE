import React from 'react';

// Images
import logo from '../images/branding.svg'

const ZipForm = (props) => {
    return (
        <div className="zip-form">
            <img src={logo} alt="Check Your Rep!" className="logo"/>
            <p className="intro">Use our service to search for your local representatives and give them a piece of your mind!</p>
            <form className="search-form" action="post" onSubmit={props.handleSubmit}>
                <input
                onInput={props.handleChange}
                name="zipcode"
                type="text"
                id="zip-input"
                placeholder="Enter your zipcode"
                />
                <button type="submit" className="search-form-button">Search</button>
            </form>
        </div>
    )
}

export default ZipForm;