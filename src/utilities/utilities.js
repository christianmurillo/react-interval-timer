import React from "react";
import "./utilities.css";

class Utilities extends React.Component {
  constructor(props) {
    super(props);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
  }
  handleSettingsClick() {
    this.props.onSettingsClicked();
  }
  render() {
    return (
      <div className="row utilities">
        <div className="icons">
          <ul>
            <li
              className={this.props.isSettingsDisplayed ? "active" : null}
              onClick={this.handleSettingsClick}
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
