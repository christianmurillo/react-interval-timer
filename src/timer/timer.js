import React from "react";
import "./timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.formatSecondForDisplay = this.formatSecondForDisplay.bind(this);
    this.handleStartPauseClick = this.handleStartPauseClick.bind(this);
  }

  formatSecondForDisplay(roundSecond) {
    if (roundSecond < 10) {
      return "0" + roundSecond;
    }
    return roundSecond;
  }

  handleStartPauseClick() {
    this.props.onStartPauseClick();
  }

  render() {
    return (
      <div className={this.props.isTimerDisplayed ? "timer row" : "inactive"}>
        <div className="rounds-container row">
          <h1>
            ROUND <span>{this.props.currentRound}</span> OF{" "}
            <span>{this.props.totalRounds}</span>
          </h1>
        </div>
        <div className="time-container row">
          <h1>
            <span>{this.props.roundMinute}</span>:
            <span>{this.formatSecondForDisplay(this.props.roundSecond)}</span>
          </h1>
        </div>
        <div className="controls-container row">
          <span
            className={this.props.isTimerInProgress ? "pause" : "start"}
            onClick={this.handleStartPauseClick}
          >
            {this.props.isTimerInProgress ? "PAUSE " : "START "}
            <i
              className={
                this.props.isTimerInProgress ? "fa fa-pause" : "fa fa-play"
              }
              aria-hidden="true"
            />
          </span>{" "}
          <span className="stop">
            STOP <i className="fa fa-stop" aria-hidden="true" />
          </span>
        </div>
      </div>
    );
  }
}

export default Timer;
