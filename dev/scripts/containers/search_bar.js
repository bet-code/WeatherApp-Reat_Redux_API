import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        console.log(e.target.value);
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.onFormSubmit} >
                <input 
                    type="text"
                    placeholder="Get a five day forecast in your favourite cities "
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <input type="submit"/>
            </form>
        );
    }
}