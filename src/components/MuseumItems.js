import React from "react";
import fish from "../data/fish.js";
// import LazyLoad from "react-lazyload";
// import Loading from "./Loading";

class MuseumItems extends React.Component {
  renderList() {
    return fish.map((item) => {
      return (
        <div className="card" key={item.image}>
          <div className="image">
            <img className="" src={`/images/fish/${item.image}`} />
          </div>
          <div className="content">
            <div className="header">{item.name}</div>
            <div className="description">
              Month view
              <br />
              Hours
              <br />
              {item.location}
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
