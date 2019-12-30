import React from "react";
import "./break.css";

class Break extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.isBreakInProgress && this.props.restPeriod > -1
            ? "break row"
            : "inactive"
        }
      >
        <span>BREAK: {this.props.restPeriod}</span>
      </div>
    );
  }
}

export default Break;
