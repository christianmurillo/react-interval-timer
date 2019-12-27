import React from "react";
import Header from "../header/header";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
