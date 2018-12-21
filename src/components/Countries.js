import React, { Component } from "react";
import Country from "./Country";
import { Consumer } from "../context";

class Countries extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const countries = value.countries.slice(0, 10);
          return (
            <React.Fragment>
              {countries.map((country, index) => (
                <Country key={country.code} index={index} country={country} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Countries;
