import React from "react";
import "./settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRounds: 24,
      maxRoundLength: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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

    const endOfRoundSignal = [10, 30];
    const endOfRoundSignalOptions = [];
    for (let value of endOfRoundSignal) {
      endOfRoundSignalOptions.push(
        <option key={value} value={value}>
          {value}
        </option>
      );
    }

    const restPeriods = [30, 60];
    const restPeriodOptions = [];
    for (let value of restPeriods) {
      restPeriodOptions.push(
        <option key={value} value={value}>
          {value}
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
          <form onSubmit={this.handleSubmit}>
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

            <br />
            <br />

            <label>
              <strong>END OF ROUND SIGNAL (seconds): </strong>
            </label>
            <select type="number">{endOfRoundSignalOptions}</select>

            <br />
            <br />

            <label>
              <strong>REST PERIOD (seconds): </strong>
            </label>
            <select type="number">{restPeriodOptions}</select>

            <br />
            <br />

            <label>
              <strong>START COUNTDOWN (seconds): </strong>
            </label>
            <select type="number">{endOfRoundSignalOptions}</select>

            <br />
            <br />
            <button className="submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
