import React from "react";
import fish from "../data/fish.js";
import months from "../data/months.js";
// import LazyLoad from "react-lazyload";
// import Loading from "./Loading";

class MuseumItems extends React.Component {
  renderMonths(itemActiveMonths) {
    return months.map((month) => {
      return (
        <div
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

  renderList() {
    return fish.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="image">
            <img alt={item.name} src={`/images/fish/${item.image}`} />
          </div>
          <div className="content">
            <div className="header">{item.name}</div>
            <div className="description">
              <div className="ui segment">
                {this.renderMonthContainer(item.northMonths)}
              </div>

              <div className="ui small header">Active Hours:</div>

              <div className="ui small header">Found in : {item.location}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui cards">{this.renderList()}</div>
      </div>
    );
  }
}

export default MuseumItems;
