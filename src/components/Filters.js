import React from "react";
import { connect } from "react-redux";
import months from "../data/months.js";
import {
  setFishFilter,
  setBugsFilter,
  setUnderseaFilter,
  setHemisphereFilter,
  setTimeFilter,
  setHour,
  setMonth,
} from "../actions";

class Filters extends React.Component {
  onHourChange = (event) => {
    this.props.setHour(event.target.value);
  };
  onMonthChange = (event) => {
    this.props.setMonth(event.target.value);
  };

  render() {
    const hourOptions = [];
    for (let i = 0; i < 24; i++) {
      hourOptions.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return (
      <div className="ui container">
        <div className="ui buttons">
          <button
            className={`ui button ${
              this.props.filters.fishFilter ? "positive" : "negative"
            }`}
            onClick={() => {
              this.props.setFishFilter();
            }}
          >
            Fish
          </button>
          <button
            className={`ui button ${
              this.props.filters.bugsFilter ? "positive" : "negative"
            }`}
            onClick={() => {
              this.props.setBugsFilter();
            }}
          >
            Bugs
          </button>
          <button
            className={`ui button ${
              this.props.filters.underseaFilter ? "positive" : "negative"
            }`}
            onClick={() => {
              this.props.setUnderseaFilter();
            }}
          >
            UW
          </button>

          <button
            className={`ui button ${
              this.props.filters.hemisphereFilter === "North" ? "positive" : ""
            }`}
            onClick={() => {
              this.props.setHemisphereFilter();
            }}
          >
            N
          </button>
          <div className="or"></div>
          <button
            className={`ui button ${
              this.props.filters.hemisphereFilter === "South" ? "positive" : ""
            }`}
            onClick={() => {
              this.props.setHemisphereFilter();
            }}
          >
            S
          </button>
        </div>

        <div className="ui buttons">
          <button
            className={`ui button ${
              this.props.filters.timeFilter === "All" ? "positive" : ""
            }`}
            onClick={() => {
              this.props.setTimeFilter("All");
            }}
          >
            All
          </button>
          <div className="or"></div>
          <button
            className={`ui button ${
              this.props.filters.timeFilter === "Now" ? "positive" : ""
            }`}
            onClick={() => {
              this.props.setTimeFilter("Now");
            }}
          >
            Now
          </button>
          <div className="or"></div>
          <button
            className={`ui button ${
              this.props.filters.timeFilter === "Time" ? "positive" : ""
            }`}
            onClick={() => {
              this.props.setTimeFilter("Time");
            }}
          >
            Time
          </button>

          <select
            name="hourSelect"
            className="ui compact selection dropdown button"
            value={this.props.filters.hour}
            onChange={this.onHourChange}
          >
            {hourOptions}
          </select>
          <select
            name="monthSelect"
            className="ui compact selection dropdown button"
            value={this.props.filters.month}
            onChange={this.onMonthChange}
          >
            {months.map((month) => {
              return (
                <option value={month.id} key={month.id}>
                  {month.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps, {
  setUnderseaFilter,
  setBugsFilter,
  setFishFilter,
  setHemisphereFilter,
  setTimeFilter,
  setHour,
  setMonth,
})(Filters);
