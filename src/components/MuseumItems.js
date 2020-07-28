import React from "react";
import fish from "../data/fish.js";
// import LazyLoad from "react-lazyload";
// import Loading from "./Loading";

class MuseumItems extends React.Component {
  renderList() {
    return fish.map((item) => {
      return (
        <div className="item" key={item.image}>
          <img className="ui small image" src={`/images/fish/${item.image}`} />
          <div className="content">
            <div className="header">{item.name}</div>
            {item.location}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

export default MuseumItems;
