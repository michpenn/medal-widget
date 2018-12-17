import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortedBy: action.payload,
        countries: sortedCountries(state.countries, action.payload)
      };
    default:
      return state;
  }
};

const sortedCountries = (countries, sort) => {
  switch (sort) {
    case "silver":
      countries.sort((a, b) => {
        if (a.silver === b.silver) {
          return b.gold - a.gold;
        }
        return b.silver - a.silver;
      });
      break;
    case "bronze":
      countries.sort((a, b) => {
        if (a.bronze === b.bronze) {
          return b.gold - a.gold;
        }
        return b.bronze - a.bronze;
      });
      break;
    case "total":
      countries.sort((a, b) => {
        const aTotal = a.gold + a.silver + a.bronze;
        const bTotal = b.gold + b.silver + b.bronze;
        if (aTotal === bTotal) {
          return b.gold - a.gold;
        }
        return bTotal - aTotal;
      });
      break;
    default:
      countries.sort((a, b) => {
        if (a.gold === b.gold) {
          return b.silver - a.silver;
        }
        return b.gold - a.gold;
      });
      break;
  }

  return countries;
};

export class Provider extends Component {
  state = {
    sortedBy: "gold",
    countries: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios
      .get(
        "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json"
      )
      .then(response =>
        this.setState({
          countries: sortedCountries(response.data, this.state.sortedBy)
        })
      );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
