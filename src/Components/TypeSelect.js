import React from "react";

const TypeSelect = ({ setType }) => {
  const searchType = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <select onChange={searchType} className="form-select">
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default TypeSelect;
