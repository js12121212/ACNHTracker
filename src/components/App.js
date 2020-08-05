import React from "react";
import MuseumItems from "./MuseumItems";
import Filters from "./Filters";

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <Filters />
      </div>
      <div className="ui main container">
        <MuseumItems />
      </div>
    </div>
  );
};

export default App;
