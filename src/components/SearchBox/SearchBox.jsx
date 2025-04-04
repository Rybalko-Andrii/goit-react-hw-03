import React, { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filterId"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
