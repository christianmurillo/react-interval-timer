import React from "react";
import Header from "../header/header";
import Utilities from "../utilities/utilities";
import Settings from "../settings/settings";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsDisplayed: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
  }

  handleSettingsClick() {
    this.setState(prevState => ({
      isSettingsDisplayed: !prevState.isSettingsDisplayed
    }));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Utilities
          isSettingsDisplayed={this.state.isSettingsDisplayed}
          onSettingsClicked={this.handleSettingsClick}
        />
        <Settings isSettingsDisplayed={this.state.isSettingsDisplayed} />
      </div>
    );
  }
}

export default App;
