import React from "react";
import Loading from "./Loading";
import months from "../data/months";

class MonthDisplay extends React.Component {
  renderMonths(itemActiveMonths) {
    if (!itemActiveMonths) {
      return <Loading />;
    }
    return months.map((month) => {
      let monthClass = "column";
      if (itemActiveMonths.indexOf(month.id) > -1) {
        monthClass = "column green";
      }
      return (
        <div key={month.id} className={monthClass}>
          {month.name}
        </div>
      );
    });
  }

  render() {
    const itemActiveMonths = this.props.months;
    if (!itemActiveMonths) {
      return <Loading />;
    }
    return (
      <div className="ui six column grid">
        {this.renderMonths(itemActiveMonths)}
      </div>
    );
  }
}

export default MonthDisplay;
