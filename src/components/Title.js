import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <tr className="row-title">
        <td className="text-uppercase sort-medal-title" colSpan="3">
          {name}
        </td>
      </tr>
    </React.Fragment>
  );
};

Title.defaultProps = {
  name: "Medal Count"
};

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
