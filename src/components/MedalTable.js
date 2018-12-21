import React, { Component } from "react";
import Countries from "./Countries";
import Title from "./Title";
import Sort from "./Sort";

class MedalTable extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-sm table-medals">
          <thead>
            <Title />
            <Sort />
          </thead>
          <tbody>
            <Countries />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MedalTable;
