import React from "react";
import LazyLoad from "react-lazy-load";
import Loading from "./Loading";
import MonthDisplay from "./MonthDisplay";

class MuseumItem extends React.Component {
  calculateHourString(hour, isEnding = false) {
    var hourString = "";
    if (isEnding) {
      hour = hour + 1;
    }
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
    } else if (startingHour === 0 && endingHour === 23) {
      return <div className="ui small header">Active hours: All day</div>;
    } else {
      return (
        <React.Fragment>
          <div className="ui small header">
            Active hours: {this.calculateHourString(startingHour)} -{" "}
            {this.calculateHourString(endingHour, true)}
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="card" key={item.id}>
        <div className={`image ${this.props.type}`}>
          <LazyLoad key={item.id} placeholder={<Loading />}>
            <img
              alt={item.name}
              src={`/images/${this.props.type}/${item.image}`}
            />
          </LazyLoad>
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
          <div className="description">
            <div className="ui segment">
              <MonthDisplay months={item.northMonths} />
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
  }
}

export default MuseumItem;
