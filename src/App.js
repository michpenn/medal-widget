import React, { Component } from "react";
import Countries from "./components/Countries";
import Title from "./components/Title";
import Sort from "./components/Sort";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <table className="table table-sm table-medals">
              <thead>
                <Title name="MEDAL COUNT" />
                <Sort />
              </thead>
              <tbody>
                <Countries />
              </tbody>
            </table>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
