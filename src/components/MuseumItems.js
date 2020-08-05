import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazy-load";
import undersea from "../data/undersea.js";
import fish from "../data/fish.js";
import bugs from "../data/bugs.js";
import months from "../data/months.js";
import Loading from "./Loading";
import { fetchMuseumData } from "../actions";

class MuseumItems extends React.Component {
  renderMonths(itemActiveMonths) {
    return months.map((month) => {
      return (
        <div
          key={month.id}
          className={`column ${
            itemActiveMonths.indexOf(month.id) > -1 ? "green" : ""
          }`}
        >
          {month.name}
        </div>
      );
    });
  }

  renderMonthContainer(itemActiveMonths) {
    return (
      <div className="ui six column grid">
        {this.renderMonths(itemActiveMonths)}
      </div>
    );
  }

  calculateHourString(hour) {
    var hourString = "";
    if (hour > 12) {
      hourString = hour - 12;
      hourString = hourString + "PM";
    } else if (hour === 12) {
      hourString = "12PM";
    } else {
      hourString = hour + "AM";
    }
    return hourString;
  }
  renderActiveHours(activeHours) {
    var startingHour = activeHours[0];
    var endingHour = activeHours[activeHours.length - 1];

    if (Array.isArray(startingHour)) {
      return (
        <React.Fragment>
          {this.renderActiveHours(startingHour)}
          {this.renderActiveHours(endingHour)}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="ui small header">
            Active hours: {this.calculateHourString(startingHour)} -{" "}
            {this.calculateHourString(endingHour)}
          </div>
        </React.Fragment>
      );
    }
  }

  renderList(type) {
    let data = {};
    switch (type) {
      case "fish":
        data = fish;

        if (this.props.filters.fishFilter !== true) {
          return "";
        }
        break;
      case "bugs":
        data = bugs;
        if (this.props.filters.bugsFilter !== true) {
          return "";
        }
        break;
      case "undersea":
        data = undersea;
        if (this.props.filters.underseaFilter !== true) {
          return "";
        }
        break;
      default:
        return <div className="content">An error has occurred</div>;
    }
    return data.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className={`image ${type}`}>
            <LazyLoad key={item.id} placeholder={<Loading />}>
              <img alt={item.name} src={`/images/${type}/${item.image}`} />
            </LazyLoad>
          </div>
          <div className="content">
            <div className="header">{item.name}</div>
            <div className="description">
              <div className="ui segment">
                {this.renderMonthContainer(item.northMonths)}
              </div>

              {this.renderActiveHours(item.activeHours)}

              <div className="ui small header">Found in: {item.location}</div>
            </div>
          </div>
          <div className="extra content">
            <div className="small header">Price: {item.price}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui center aligned container">
        <div className="ui cards">
          {this.renderList("fish")}
          {this.renderList("bugs")}
          {this.renderList("undersea")}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps, {
  fetchMuseumData,
})(MuseumItems);
