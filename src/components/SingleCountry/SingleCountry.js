import React from "react";

const SingleCountry = ({ countryObj }) => {
  return (
    <div className="single-country">
      <h3>Selected Country:</h3>
      <p>Country Name: {countryObj?.name?.common}</p>
      <p>Population:{countryObj?.population}</p>
    </div>
  );
};

export default SingleCountry;
