import React from "react";
import LazyLoad from "react-lazy-load";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import Loading from "./Loading";
import MonthDisplay from "./MonthDisplay";
import { fetchMuseumData, setMuseumData } from "../actions";

class MuseumItem extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
  }

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

  renderMonths() {
    const item = this.props.item;
    let hemisphere = item.northMonths;

    if (this.props.filters.hemisphereFilter === "South") {
      hemisphere = item.southMonths;
    }

    return (
      <div className="ui segment">
        <MonthDisplay months={hemisphere} />
      </div>
    );
  }

  onClick(item, e) {
    let value = true;
    const id = item.id;
    if (this.props.museumItems[id]) {
      value = false;
    }
    this.saveCookie(id, value);
    this.props.setMuseumData(id, value);
    return true;
  }

  saveCookie(id, value) {
    const { cookies } = this.props;
    const cookieObject = { ...this.props.museumItems, [id]: value };
    const stringOfMuseumItems = JSON.stringify(cookieObject);

    cookies.set("museumItems", stringOfMuseumItems, {
      path: "/",
      sameSite: "Strict",
      maxAge: 31536000,
    });
  }

  render() {
    const item = this.props.item;
    const boundItemClick = this.onClick.bind(this, item);
    const imageStyle = "image " + this.props.type + " " + this.props.inMuseum;
    const imageURL =
      process.env.PUBLIC_URL + "/images/" + this.props.type + "/" + item.image;
    return (
      <div
        className={this.props.cardStyle}
        key={item.id}
        onClick={boundItemClick}
      >
        <div className={imageStyle}>
          <LazyLoad key={item.id} placeholder={<Loading />}>
            <img alt={item.name} src={imageURL} />
          </LazyLoad>
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
          <div className="description">
            {this.renderMonths()}

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

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    museumItems: state.museumItems,
  };
};
export default withCookies(
  connect(mapStateToProps, {
    fetchMuseumData,
    setMuseumData,
  })(MuseumItem)
);
