import React from "react";
import MuseumItems from "./MuseumItems";

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <i className="calendar icon">Fish</i>
          <i className="certificate icon">Bugs</i>
          <i className="compass icon">Undersea</i>
        </div>
      </div>
      <div className="ui main container">
        <MuseumItems />
      </div>
    </div>
  );
};

export default App;
