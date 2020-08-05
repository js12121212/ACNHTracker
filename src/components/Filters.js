import React from "react";

const Filters = () => {
  return (
    <div className="ui container">
      <img
        className="ui mini image"
        src="/images/icons/fish-icon.png"
        alt="Fish"
      />
      <img
        className="ui mini image"
        src="/images/icons/butterfly-icon.png"
        alt="Bugs"
      />
      <img
        className="ui mini image"
        src="/images/icons/octopus-icon.png"
        alt="Undersea"
      />

      <div className="ui buttons">
        <button className="ui button positive">North</button>
        <div className="or"></div>
        <button className="ui button">South</button>
      </div>

      <div className="ui buttons">
        <button className="ui button positive">All</button>
        <div className="or"></div>
        <button className="ui button">Now</button>
        <div className="or"></div>
        <button className="ui button">Time</button>
      </div>
    </div>
  );
};

export default Filters;
