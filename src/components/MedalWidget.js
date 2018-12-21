import React, { Component } from "react";
import { Consumer } from "../context";
import MedalTable from "./MedalTable";
import ErrorDisplay from "./ErrorDisplay";

class MedalWidget extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const displayErrorWarning = value.displayErrorWarning;
          const errorCode = value.errorCode;
          return (
            <div className="container">
              {displayErrorWarning ? (
                <ErrorDisplay errorCode={errorCode} />
              ) : (
                <MedalTable />
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default MedalWidget;
