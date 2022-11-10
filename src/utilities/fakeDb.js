const addToStorage = (cca3) => {
  let countryList = {};
  const storedCountry = localStorage.getItem("countryList");

  //Get country list from local storage
  if (storedCountry) {
    countryList = JSON.parse(storedCountry);
  }

  let quantity = countryList[cca3];
  if (quantity) {
    countryList[cca3] = quantity + 1;
  } else {
    countryList[cca3] = 1;
  }

  localStorage.setItem("countryList", JSON.stringify(countryList));
};

const getStoredList = () => {
  let countryList = {};
  const storedCountry = localStorage.getItem("countryList");

  //Get country list from local storage
  if (storedCountry) {
    countryList = JSON.parse(storedCountry);
  }
  return countryList;
};

const removeFromStorage = () => {
  localStorage.removeItem("countryList");
};

export { addToStorage, getStoredList, removeFromStorage };
