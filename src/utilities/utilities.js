import React from "react";
import "./utilities.css";

class Utilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsDisplayed: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isSettingsDisplayed: !prevState.isSettingsDisplayed
    }));
  }
  render() {
    return (
      <div className="row utilities">
        <div className="icons">
          <ul>
            <li
              className={this.state.isSettingsDisplayed ? "active" : null}
              onClick={this.handleClick}
            >
              <i className="fa fa-cogs fa-2x" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Utilities;
