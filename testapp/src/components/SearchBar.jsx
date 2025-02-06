import PropTypes from 'prop-types';
import { useState } from "react";

const DriverSearchBar = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChangeCallback?.(inputValue);
  };

  return (
    <input
      type="text"
      className="search-bar"
      value={value}
      onChange={handleChange}
      placeholder="Type to search by name or registration"
    />
  );
};

DriverSearchBar.propTypes = {
  onChangeCallback: PropTypes.func,
};

export default DriverSearchBar;