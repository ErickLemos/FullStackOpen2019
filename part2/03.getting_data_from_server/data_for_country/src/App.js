import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

  // USES STATES
  const [countrys, setCountrys] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  // HOOKS
  const dataCountry = () => {
    console.log('[EFFECT]: activate');
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('[PROMISSE]: sucess');
      setCountrys(response.data);
    })
  };
  useEffect(dataCountry, []);

  // HANDLES
  const handleInputSearch = (event) => {
    console.log(event.target.value);
    setInputSearch(event.target.value);
  };

  // INTERFACE
  const countrysListShow = (inputSearch === '') ? countrys: countrys.filter(country => country.name.toLowerCase().includes(inputSearch.toLowerCase()));
  const countrysList = () => {
    if (countrysListShow.length === 1) {
      return showCountry()
    }

    if (countrysListShow.length <= 10) {
      return showCountrys()

    }

    return(
        <p>Too many matches, specify another filter</p>
    )
  };

  const showCountrys = () => countrysListShow.map(country => {
    return <p key={country.alpha3Code}>{country.name}</p>
  });

  const showCountry = () => countrysListShow.map(country => {
    return(
        <div>
          <h2>{country.name}</h2>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <h2>Languages</h2>
          <ul>{country.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}</ul>
          <img src={country.flag} width={100}/>
        </div>
    )
  });

  return (
    <div>

      <div>
        search: <input value={inputSearch} onChange={handleInputSearch}/>
      </div>

      <div>
        {countrysList()}
      </div>

    </div>
  );
};

export default App;
