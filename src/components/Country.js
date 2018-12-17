import React, { Component } from "react";
import PropTypes from "prop-types";

class Country extends Component {
  state = {
    display: true
  };
  render() {
    const { code, gold, silver, bronze } = this.props.country;
    const { index } = this.props;
    const total = gold + silver + bronze;
    const showCountry = this.state.display;
    return (
      <React.Fragment>
        {showCountry ? (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img src="" alt="flag" />
            </td>
            <td className="text-uppercase">{code}</td>
            <td>{gold}</td>
            <td>{silver}</td>
            <td>{bronze}</td>
            <td>{total}</td>
          </tr>
        ) : null}
      </React.Fragment>
    );
  }
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};

export default Country;
