import React, { Component } from "react";

class ErrorDisplay extends Component {
  processErrorCode = errorCode => {
    if (errorCode && errorCode.startsWith("5")) {
      return "Server Error";
    }

    return "Not Found";
  };
  render() {
    const errorCode = this.props.errorCode;
    const errorText = this.processErrorCode(errorCode);
    return (
      <div className="row">
        <div className="col-xs-12">
          <h1>
            <span className="text-danger">{errorCode} </span>
            <span>{errorText}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default ErrorDisplay;
