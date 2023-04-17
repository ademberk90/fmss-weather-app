import React from "react";
import cities from "../helpers/cities";
import { useCity } from "../context/CityContext";

const SearchBox = () => {
  const { cityId, setCityId } = useCity();

  const handleChange = (e) => {
    setCityId(e.target.value);
  };

  return ( 
    <div>
      <select  value={cityId} onChange={handleChange}>
        {cities.map((city) => {
          return <option value={city.id}>{city.label}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchBox;
