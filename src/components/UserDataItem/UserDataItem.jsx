// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const UserDataItem = ({ type, label, value }) => {
  return (
    <label htmlFor={label}>
      {label}
      <input type={type} name={label} id={label} value={value} />
    </label>
  );
};

UserDataItem.propTypes = {
  type : PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired,
};