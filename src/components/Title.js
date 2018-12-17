import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <tr>
        <td className="text-uppercase" colSpan="3">
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
