import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#176;C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map((cityData) => {
                const name = cityData.city.name;
                const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
                const pressures = cityData.list.map(weather => weather.main.pressure);
                const humidities = cityData.list.map(weather => weather.main.humidity);
                const { lon, lat } = cityData.city.coord;

                return (
                  <tr key={name}>
                      <td><GoogleMap lon={lon} lat={lat}/>{name}</td>
                      <td><Chart data={temps} colour='rebeccapurple' units="&#176;C" /></td>
                      <td><Chart data={pressures} colour='green' units=" hPa"/></td>
                      <td><Chart data={humidities} colour='orange' units="%"/></td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);