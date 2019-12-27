import React from "react";
import "./settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRounds: 24,
      maxRoundLength: 5
    };
  }
  render() {
    const totalRoundOptions = [];
    for (let i = 1; i <= this.state.totalRounds; i++) {
      totalRoundOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    const roundLengthOptions = [];
    for (let i = 1; i <= this.state.maxRoundLength; i++) {
      roundLengthOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <div
        className={this.props.isSettingsDisplayed ? "settings row" : "inactive"}
      >
        <div className="col-12 col-m-12">
          <h4>TIMER SETTINGS</h4>
          <br />
          <hr />
          <br />
          <form>
            <label>
              <strong>TOTAL ROUNDS: </strong>
            </label>
            <select type="number">{totalRoundOptions}</select>

            <br />
            <br />

            <label>
              <strong>ROUND LENGTH (minutes): </strong>
            </label>
            <select type="number">{roundLengthOptions}</select>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
