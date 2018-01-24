import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        console.log(e.target.value);
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ""});
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);