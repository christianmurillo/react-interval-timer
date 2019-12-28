import React from "react";
import "./settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxRounds: 24,
      maxRoundLength: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTotalRoundsChange = this.handleTotalRoundsChange.bind(this);
    this.handleRoundLengthChange = this.handleRoundLengthChange.bind(this);
    this.handleEndOfRoundChange = this.handleEndOfRoundChange.bind(this);
    this.handleRestPeriodChange = this.handleRestPeriodChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // get values
    console.info(
      "totalRounds: ",
      this.props.totalRounds,
      "\nroundLength: ",
      this.props.roundLength,
      "\nendOfRoundSignal: ",
      this.props.endOfRoundSignal,
      "\nrestPeriod: ",
      this.props.restPeriod
    );
  }

  handleTotalRoundsChange(event) {
    this.props.onTotalRoundsChange(event);
  }

  handleRoundLengthChange(event) {
    this.props.onRoundLengthChange(event);
  }

  handleEndOfRoundChange(event) {
    this.props.onEndOfRoundSignalChange(event);
  }

  handleRestPeriodChange(event) {
    this.props.onRestPeriodChange(event);
  }

  render() {
    const totalRoundOptions = [];
    for (let i = 1; i <= this.state.maxRounds; i++) {
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
            <select
              type="number"
              value={this.props.totalRounds}
              onChange={this.handleTotalRoundsChange}
            >
              {totalRoundOptions}
            </select>

            <br />
            <br />

            <label>
              <strong>ROUND LENGTH (minutes): </strong>
            </label>
            <select
              type="number"
              value={this.props.roundLength}
              onChange={this.handleRoundLengthChange}
            >
              {roundLengthOptions}
            </select>

            <br />
            <br />

            <label>
              <strong>END OF ROUND SIGNAL (seconds): </strong>
            </label>
            <select
              type="number"
              value={this.props.endOfRoundSignal}
              onChange={this.handleEndOfRoundChange}
            >
              {endOfRoundSignalOptions}
            </select>

            <br />
            <br />

            <label>
              <strong>REST PERIOD (seconds): </strong>
            </label>
            <select
              type="number"
              value={this.props.restPeriod}
              onChange={this.handleRestPeriodChange}
            >
              {restPeriodOptions}
            </select>

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
