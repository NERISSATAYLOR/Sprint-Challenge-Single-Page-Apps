import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        const characters = response.data.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("rick characters", response);
        setData(characters)
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);

  };

  return (
    <section className="search-form">
      // Add a search form here
      <form className="search">
        <input type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="people">
        {data.map(data => {
          return (
            <div className="character-list" key={data.id}>
              <h2>
                {data.name}
              </h2>
            </div>
          )
        })}
      </div>
    </section>
  );
}
