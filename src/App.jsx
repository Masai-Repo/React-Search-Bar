import { useState } from "react";
import cities from "cities-list";
import logo from "./logo.svg";
import "./App.css";

const citiesArray = Object.keys(cities);

function App() {
  const [count, setCount] = useState(0);

  const [filteredCities, setFilteredCities] = useState([]);

  const doCityFilter = (query) => {
    if (!query) return setFilteredCities([]);

    setFilteredCities(
      citiesArray.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <h1>Find your favourite cities</h1>

      <form className="mt-3 mb-5">
        <input
          type="text"
          className="px-2"
          placeholder="search here..."
          onChange={(event) => doCityFilter(event.target.value)}
        />
      </form>

      <div>
        {filteredCities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
