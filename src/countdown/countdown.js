import React from "react";
import "./countdown.css";

class Countdown extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.isCountdownInProgress && this.props.startCountdown > -1
            ? "countdown row"
            : "inactive"
        }
      >
        <span>COUNTDOWN: {this.props.startCountdown}</span>
      </div>
    );
  }
}

export default Countdown;
