import React from 'react';

import PropTypes from "prop-types";

const SelectOption = ({ children, value, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

SelectOption.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SelectOption;
