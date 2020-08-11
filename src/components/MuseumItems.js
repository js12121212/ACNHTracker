import React from "react";
import { connect } from "react-redux";
import MuseumItem from "./MuseumItem";
import undersea from "../data/undersea.js";
import fish from "../data/fish.js";
import bugs from "../data/bugs.js";

class MuseumItems extends React.Component {
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
      const { timeFilter, month, hour } = this.props.filters;
      if (timeFilter !== "All") {
        if (this.isActiveAtTime(item, month, hour)) {
          return <MuseumItem item={item} type={type} key={item.id} />;
        } else {
          return false;
        }
      }
      return <MuseumItem item={item} type={type} key={item.id} />;
    });
  }

  isActiveAtTime(item = null, month = 1, hour = 0) {
    if (item.id) {
      //Check hour
      if (item.activeHours.indexOf(hour) === -1) {
        return false;
      }
      //Check month for this hemisphere
      let hemisphereMonths = item.northMonths;
      if (this.props.filters.hemisphereFilter === "South") {
        hemisphereMonths = item.southMonths;
      }
      if (hemisphereMonths.indexOf(month) !== -1) {
        return true;
      }
    }
    return false;
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
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps, null)(MuseumItems);
