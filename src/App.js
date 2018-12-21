import React, { Component } from "react";
import MedalTable from "./components/MedalTable";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <MedalTable />
        </div>
      </Provider>
    );
  }
}

export default App;
