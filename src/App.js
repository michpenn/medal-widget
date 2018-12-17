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
          <table className="table table-sm">
            <thead>
              <Title name="MEDAL COUNT" />
              <Sort />
            </thead>
            <tbody>
              <Countries />
            </tbody>
          </table>
        </div>
      </Provider>
    );
  }
}

export default App;
