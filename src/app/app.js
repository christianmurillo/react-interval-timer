import React from "react";
import Header from "../header/header";
import Utilities from "../utilities/utilities";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Utilities />
      </div>
    );
  }
}

export default App;
