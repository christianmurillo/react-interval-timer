import React from "react";
import "./progress.css";

class Progress extends React.Component {
  componentDidUpdate() {
    const totalSeconds = this.props.userEnteredRoundMinute * 60;
    const currentSeconds = this.props.roundMinute * 60 + this.props.roundSecond;
    const elapsedSeconds = totalSeconds - currentSeconds;
    const percentOfCompletedRound = (elapsedSeconds / totalSeconds) * 100;
    const elem = document.getElementById("progress-bar");
    if (
      this.props.isTimerInProgress &&
      !this.props.isCountdownInProgress &&
      !this.props.isBreakInProgress
    ) {
      elem.style.width = percentOfCompletedRound + "%";
    }
  }
  render() {
    return (
      <div
        className={
          this.props.isTimerInProgress &&
          !this.props.isCountdownInProgress &&
          !this.props.isBreakInProgress
            ? "progress row"
            : "inactive"
        }
      >
        <div className="progress-background">
          <div id="progress-bar" />
        </div>
      </div>
    );
  }
}

export default Progress;
