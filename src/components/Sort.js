import React, { Component } from "react";
import { Consumer } from "../context";

class Sort extends Component {
  onClickSort(sort, dispatch) {
    dispatch({ type: "SORT", payload: sort });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <tr>
                <td />
                <td />
                <td />
                <td>
                  <div
                    onClick={this.onClickSort.bind(this, "gold", dispatch)}
                    className="sort-medal sort-medal--gold"
                  />
                </td>
                <td>
                  <div
                    onClick={this.onClickSort.bind(this, "silver", dispatch)}
                    className="sort-medal sort-medal--silver"
                  />
                </td>
                <td>
                  <div
                    onClick={this.onClickSort.bind(this, "bronze", dispatch)}
                    className="sort-medal sort-medal--bronze"
                  />
                </td>
                <td>
                  <div onClick={this.onClickSort.bind(this, "total", dispatch)}>
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
