import React, { useEffect, useState } from "react";
import {
  addToStorage,
  getStoredList,
  removeFromStorage,
} from "../../utilities/fakeDb";
import Country from "../Country/Country";
import CountryList from "../CountryList/CountryList";
import SingleCountry from "../SingleCountry/SingleCountry";
import "./MainContent.css";

const MainContent = () => {
  const [countries, setCountries] = useState([]);
  const [singleCountryObj, setSingleCountryObj] = useState({});
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    const storedList = getStoredList();
    const saveCountryList = [];
    if (storedList) {
      for (const cca3 in storedList) {
        const addedCountry = countries.find((country) => country.cca3 === cca3);
        if (addedCountry) {
          addedCountry.quantity = storedList[cca3];
          saveCountryList.push(addedCountry);
        }
      }
    }
    setCountryList(saveCountryList);
  }, [countries]);

  //Select button event handler
  const handleSelectBtn = (selectedCountry) => {
    setSingleCountryObj(selectedCountry);
  };

  //Add to List button event handler
  const addToListBtn = (selectedCountry) => {
    let newCountyList = [];
    const existsCountry = countryList.find(
      (country) => country.cca3 === selectedCountry.cca3
    );
    if (!existsCountry) {
      selectedCountry.quantity = 1;
      newCountyList = [...countryList, selectedCountry];
    } else {
      const rest = countryList.filter(
        (country) => country.cca3 !== selectedCountry.cca3
      );
      existsCountry.quantity += 1;
      newCountyList = [...rest, existsCountry];
    }

    setCountryList(newCountyList);
    addToStorage(selectedCountry.cca3);
  };

  const removeStorage = () => {
    removeFromStorage();
    setCountryList([]);
  };

  return (
    <div className="main-content">
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleSelectBtn={handleSelectBtn}
            addToListBtn={addToListBtn}
          ></Country>
        ))}
      </div>
      <div>
        <div className="country-info-container">
          <CountryList
            countryList={countryList}
            removeStorage={removeStorage}
          ></CountryList>
          <SingleCountry countryObj={singleCountryObj}></SingleCountry>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
