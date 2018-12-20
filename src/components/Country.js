import React, { Component } from "react";
import PropTypes from "prop-types";

class Country extends Component {
  render() {
    const { code, gold, silver, bronze } = this.props.country;
    const { index } = this.props;
    const total = gold + silver + bronze;

    const imageSource = `/images/flags/${code}.png`;
    return (
      <React.Fragment>
        <tr>
          <td>{index + 1}</td>
          <td>
            <img src={imageSource} alt={code} />
          </td>
          <td className="text-uppercase font-weight-bold">
            <div className="medal-country">{code}</div>
          </td>
          <td className="text-center">{gold}</td>
          <td className="text-center">{silver}</td>
          <td className="text-center">{bronze}</td>
          <td className="medal-count--total font-weight-bold text-center">
            {total}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};

export default Country;
