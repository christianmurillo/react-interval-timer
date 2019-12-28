import React from "react";
import Header from "../header/header";
import Utilities from "../utilities/utilities";
import Settings from "../settings/settings";
import Timer from "../timer/timer";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsDisplayed: true,
      totalRounds: 1,
      roundLength: 1,
      endOfRoundSignal: 10,
      restPeriod: 30,
      startCountdown: 10,
      isTimerDisplayed: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleTotalRoundsChange = this.handleTotalRoundsChange.bind(this);
    this.handleRoundLengthChange = this.handleRoundLengthChange.bind(this);
    this.handleEndOfRoundChange = this.handleEndOfRoundChange.bind(this);
    this.handleRestPeriodChange = this.handleRestPeriodChange.bind(this);
    this.handleStartCountdownChange = this.handleStartCountdownChange.bind(
      this
    );
    this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
  }

  handleSettingsClick() {
    this.setState(prevState => ({
      isSettingsDisplayed: !prevState.isSettingsDisplayed
    }));
  }

  handleSettingsSubmit() {
    this.handleSettingsClick();
    // show timer
    this.setState(prevState => ({
      isTimerDisplayed: !prevState.isTimerDisplayed
    }));
  }

  handleTotalRoundsChange(event) {
    this.setState({ totalRounds: event.target.value });
  }

  handleRoundLengthChange(event) {
    this.setState({ roundLength: event.target.value });
  }

  handleEndOfRoundChange(event) {
    this.setState({ endOfRoundSignal: event.target.value });
  }

  handleRestPeriodChange(event) {
    this.setState({ restPeriod: event.target.value });
  }

  handleStartCountdownChange(event) {
    this.setState({ startCountdown: event.target.value });
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
          onSettingsSubmit={this.handleSettingsSubmit}
          totalRounds={this.state.totalRounds}
          onTotalRoundsChange={this.handleTotalRoundsChange}
          roundLength={this.state.roundLength}
          onRoundLengthChange={this.handleRoundLengthChange}
          endOfRoundSignal={this.state.endOfRoundSignal}
          onEndOfRoundSignalChange={this.handleEndOfRoundChange}
          restPeriod={this.state.restPeriod}
          onRestPeriodChange={this.handleRestPeriodChange}
          startCountdown={this.state.startCountdown}
          onStartCountdownChange={this.handleStartCountdownChange}
        />
        <Timer
          isTimerDisplayed={this.state.isTimerDisplayed}
          totalRounds={this.state.totalRounds}
        />
      </div>
    );
  }
}

export default App;
