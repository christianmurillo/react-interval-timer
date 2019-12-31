import React from "react";
import Header from "../header/header";
import Utilities from "../utilities/utilities";
import Settings from "../settings/settings";
import Timer from "../timer/timer";
import Break from "../break/break";
import Countdown from "../countdown/countdown";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      isSettingsDisplayed: true,
      totalRounds: 1,
      endOfRoundSignal: 10,
      restPeriod: 30,
      startCountdown: 10,
      isTimerDisplayed: false,
      userEnteredRoundMinute: 1,
      roundMinute: 1,
      roundSecond: 0,
      currentRound: 0,
      isTimerInProgress: false,
      isBreakInProgress: false,
      isCountdownInProgress: false
    };
    this.state = {
      ...this.initialState
    };
    this.synthesis = window.speechSynthesis;
    this.startUtterance = new SpeechSynthesisUtterance("start");
    this.pauseUtterance = new SpeechSynthesisUtterance("paused");
    this.stopUtterance = new SpeechSynthesisUtterance("stop, workout over");
    this.breakUtterance = new SpeechSynthesisUtterance("break time");
    this.countDownTimer = null;
    this.roundTimer = null;
    this.breakTimer = null;
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
    this.handleStartPauseClick = this.handleStartPauseClick.bind(this);
  }

  componentWillUnmount() {
    window.clearInterval(this.countDownTimer);
    window.clearInterval(this.roundTimer);
    window.clearInterval(this.breakTimer);
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
    this.setState({ totalRounds: parseInt(event.target.value, 10) });
  }

  handleRoundLengthChange(event) {
    this.setState({
      userEnteredRoundMinute: parseInt(event.target.value, 10),
      roundMinute: parseInt(event.target.value, 10)
    });
  }

  handleEndOfRoundChange(event) {
    this.setState({ endOfRoundSignal: parseInt(event.target.value, 10) });
  }

  handleRestPeriodChange(event) {
    this.setState({ restPeriod: parseInt(event.target.value, 10) });
  }

  handleStartCountdownChange(event) {
    this.setState({ startCountdown: parseInt(event.target.value, 10) });
  }

  initialCountDown() {
    this.setState({ isCountdownInProgress: true });
    this.countDownTimer = window.setInterval(() => {
      if (this.state.startCountdown === -1) {
        window.clearInterval(this.countDownTimer);
        this.setState(state => ({
          isCountdownInProgress: false,
          currentRound: ++state.currentRound
        }));
        this.startRoundTimer();
      } else {
        this.setState(state => ({
          startCountdown: --state.startCountdown
        }));
      }
    }, 1000);
  }

  break() {
    this.setState({ isBreakInProgress: true });
    this.breakTimer = window.setInterval(() => {
      if (this.state.restPeriod === -1) {
        window.clearInterval(this.breakTimer);
        this.setState(state => ({
          isBreakInProgress: false,
          currentRound: ++state.currentRound,
          roundMinute: state.userEnteredRoundMinute
        }));
        this.startRoundTimer();
      } else {
        this.setState(state => ({
          restPeriod: --state.restPeriod
        }));
      }
    }, 1000);
  }

  startRoundTimer() {
    this.synthesis.speak(this.startUtterance);
    this.roundTimer = window.setInterval(() => {
      if (this.state.roundMinute !== 0 && this.state.roundSecond === 0) {
        this.setState(state => ({
          roundMinute: --state.roundMinute,
          roundSecond: 60
        }));
      } else if (
        this.state.roundMinute === 0 &&
        this.state.roundSecond === this.state.endOfRoundSignal
      ) {
        this.synthesis.speak(
          new SpeechSynthesisUtterance(
            this.state.endOfRoundSignal + "seconds until end of round"
          )
        );
      } else if (this.state.roundMinute === 0 && this.state.roundSecond === 0) {
        window.clearInterval(this.roundTimer);
        if (this.state.currentRound === this.state.totalRounds) {
          this.synthesis.speak(this.stopUtterance);
          this.setState({ ...this.initialState });
        } else if (this.state.currentRound < this.state.totalRounds) {
          this.synthesis.speak(this.breakUtterance);
          this.break();
        }
      }
      // decrement roundSecond
      if (this.state.roundSecond > 0) {
        this.setState(state => ({
          roundSecond: --state.roundSecond
        }));
      }
    }, 1000);
  }

  handleStartPauseClick() {
    if (!this.state.isTimerInProgress) {
      if (this.state.startCountdown > -1) {
        this.initialCountDown(); // initial countdown hasn't completed
      } else if (this.state.isBreakInProgress) {
        this.break();
      } else {
        this.startRoundTimer();
      }
    } else {
      window.clearInterval(this.countDownTimer);
      window.clearInterval(this.roundTimer);
      window.clearInterval(this.breakTimer);
      this.synthesis.speak(this.pauseUtterance);
    }
    // toggle isTimerInProgress
    this.setState(state => ({
      isTimerInProgress: !state.isTimerInProgress
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
        <Settings
          isSettingsDisplayed={this.state.isSettingsDisplayed}
          onSettingsSubmit={this.handleSettingsSubmit}
          totalRounds={this.state.totalRounds}
          onTotalRoundsChange={this.handleTotalRoundsChange}
          roundMinute={this.state.roundMinute}
          onRoundLengthChange={this.handleRoundLengthChange}
          endOfRoundSignal={this.state.endOfRoundSignal}
          onEndOfRoundSignalChange={this.handleEndOfRoundChange}
          restPeriod={this.state.restPeriod}
          onRestPeriodChange={this.handleRestPeriodChange}
          startCountdown={this.state.startCountdown}
          onStartCountdownChange={this.handleStartCountdownChange}
        />
        <Countdown
          isCountdownInProgress={this.state.isCountdownInProgress}
          startCountdown={this.state.startCountdown}
        />
        <Break
          isBreakInProgress={this.state.isBreakInProgress}
          restPeriod={this.state.restPeriod}
        />
        <Timer
          isTimerDisplayed={this.state.isTimerDisplayed}
          totalRounds={this.state.totalRounds}
          roundMinute={this.state.roundMinute}
          roundSecond={this.state.roundSecond}
          currentRound={this.state.currentRound}
          isTimerInProgress={this.state.isTimerInProgress}
          onStartPauseClick={this.handleStartPauseClick}
        />
      </div>
    );
  }
}

export default App;
