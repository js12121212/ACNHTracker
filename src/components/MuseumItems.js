import React from "react";
import { connect } from "react-redux";
import MuseumItem from "./MuseumItem";
import undersea from "../data/undersea.js";
import fish from "../data/fish.js";
import bugs from "../data/bugs.js";
import { fetchMuseumData } from "../actions";

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
      return (
        <MuseumItem
          item={item}
          type={type}
          hemisphere={this.props.filters.hemisphereFilter}
          key={item.id}
        />
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
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps, {
  fetchMuseumData,
})(MuseumItems);
