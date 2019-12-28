import React from "react";
import "./timer.css";

class Timer extends React.Component {
  render() {
    return (
      <div className={this.props.isTimerDisplayed ? "timer row" : "inactive"}>
        <div className="rounds-container row">
          <h2>
            ROUND <span>0</span> OF <span>{this.props.totalRounds}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Timer;
