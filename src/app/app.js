import React from "react";
import Header from "../header/header";
import Utilities from "../utilities/utilities";
import Settings from "../settings/settings";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsDisplayed: true,
      totalRounds: 1,
      roundLength: 1
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleTotalRoundsChange = this.handleTotalRoundsChange.bind(this);
    this.handleRoundLengthChange = this.handleRoundLengthChange.bind(this);
  }

  handleSettingsClick() {
    this.setState(prevState => ({
      isSettingsDisplayed: !prevState.isSettingsDisplayed
    }));
  }

  handleTotalRoundsChange(event) {
    this.setState({ totalRounds: event.target.value });
  }

  handleRoundLengthChange(event) {
    this.setState({ roundLength: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Utilities
          isSettingsDisplayed={this.state.isSettingsDisplayed}
          onSettingsClicked={this.handleSettingsClick}
        />
        <Settings
          isSettingsDisplayed={this.state.isSettingsDisplayed}
          totalRounds={this.state.totalRounds}
          onTotalRoundsChange={this.handleTotalRoundsChange}
          roundLength={this.state.roundLength}
          onRoundLengthChange={this.handleRoundLengthChange}
        />
      </div>
    );
  }
}

export default App;
