import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "./SearchButton";
import {AirportModel} from "../models/AirportModel";

export class SearchView extends Component {

  state = {
    value: ''
  }
    render() {
      const {onSearchClick, airports} = this.props;
        const {value} = this.state;
        return (
            <div>
                <select value={value} onChange={this.handleChange}>
                    {airports.map((airport, index) =>
                      <option value={airport.index}>{airport.city}</option>
                    )}
                 </select>
            </div>
        )
    }
}

SearchView.propTypes = {
    onSearchClick: PropTypes.func.isRequired
};
