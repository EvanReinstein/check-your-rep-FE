import React from 'react';

const ZipForm = (props) => {
    return (
        <div className="zip-form">
            <h3 className="title">Zipcode Form</h3>
            <form className="search-form" action="post" onSubmit={props.handleSubmit}>
                <label htmlFor="">Zipcode: </label>
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