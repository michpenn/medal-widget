import React, { Component } from "react";
import MedalWidget from "./components/MedalWidget";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    const { initialSort } = this.props;
    return (
      <Provider initialSort={initialSort}>
        <div className="App">
          <MedalWidget />
        </div>
      </Provider>
    );
  }
}

export default App;
