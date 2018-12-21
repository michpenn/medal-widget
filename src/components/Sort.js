import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";

class Sort extends Component {
  onClickSort(sort, dispatch) {
    dispatch({ type: "SORT", payload: sort });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, sortedBy } = value;

          return (
            <React.Fragment>
              <tr className="row-sort">
                <td colSpan="3" />
                <td
                  className={classnames("text-center sort-medal-type", {
                    "active-filter": sortedBy === "gold"
                  })}
                >
                  <div
                    onClick={this.onClickSort.bind(this, "gold", dispatch)}
                    className="sort-medal sort-medal--gold"
                  />
                </td>
                <td
                  className={classnames("text-center sort-medal-type", {
                    "active-filter": sortedBy === "silver"
                  })}
                >
                  <div
                    onClick={this.onClickSort.bind(this, "silver", dispatch)}
                    className="sort-medal sort-medal--silver"
                  />
                </td>
                <td
                  className={classnames("text-center sort-medal-type", {
                    "active-filter": sortedBy === "bronze"
                  })}
                >
                  <div
                    onClick={this.onClickSort.bind(this, "bronze", dispatch)}
                    className="sort-medal sort-medal--bronze"
                  />
                </td>
                <td
                  className={classnames("text-center sort-medal-type", {
                    "active-filter": sortedBy === "total"
                  })}
                >
                  <div
                    onClick={this.onClickSort.bind(this, "total", dispatch)}
                    className="text-dark font-weight-bold"
                  >
                    TOTAL
                  </div>
                </td>
              </tr>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Sort;
