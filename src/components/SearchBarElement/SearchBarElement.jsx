import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBarElement = ({ handleChange }) => {
  const searchBarContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: "5px",
  };

  const searchIconStyle = {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 20,
    color: "#000",
  };

  const searchInputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    outline: "none",
  };
  return (
    <div style={searchBarContainerStyle}>
      <FaSearch style={searchIconStyle} />
      <input
        type="text"
        placeholder="Enter name..."
        onChange={handleChange}
        style={searchInputStyle}
      />
    </div>
  );
};

export default SearchBarElement;
