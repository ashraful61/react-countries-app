import React from "react";
import "./CountryList.css";

const CountryList = ({ countryList, removeStorage }) => {
  let totalPopulation = 0;
  let totalQuantity = 0;
  for (const country of countryList) {
    totalPopulation += country.population * country.quantity;
    totalQuantity += country.quantity;
  }

  return (
    <div className="country-list">
      <h3>Added Country</h3>
      <p>
        {" "}
        <span>Added Countries Number:</span> {totalQuantity}
      </p>
      <p>
        {" "}
        <span>Total Population:</span> {totalPopulation}
      </p>
      <button className="remove-btn" onClick={removeStorage}>
        Remove List
      </button>
    </div>
  );
};

export default CountryList;
