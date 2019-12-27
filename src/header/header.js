import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>
          <span className="left-header-title">INTERVAL</span>
          <span className="right-header-title">TRAINING TIMER</span>
        </h2>
      </div>
    );
  }
}

export default Header;
