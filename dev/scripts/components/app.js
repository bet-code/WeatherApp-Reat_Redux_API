import React, { Component } from "react";
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Weather Forecast</h1>
          <p>5 days at a glance</p>
        </div>
        <SearchBar />
        <WeatherList />
        <Footer target="_blank" />
      </div>
    );
  }
}