import React from "react";
import "./timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.formatSecondForDisplay = this.formatSecondForDisplay.bind(this);
  }

  formatSecondForDisplay(roundSecond) {
    if (roundSecond < 10) {
      return "0" + roundSecond;
    }
    return roundSecond;
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
        {/* controls container next */}
      </div>
    );
  }
}

export default Timer;
