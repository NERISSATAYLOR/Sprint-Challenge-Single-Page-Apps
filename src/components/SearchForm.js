import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card, Container, Row,
  CardTitle, CardSubtitle,
} from 'reactstrap';


export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredCharacter, setFilteredCharacter] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setData(response.data.results);
        setFilteredCharacter(response.data.results);
      });
  }, []);
  useEffect(() => {
    setFilteredCharacter(
      data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);


  const handleInputChange = event => {
    setQuery(event.target.value);

  };

  return (
    <section className="searchform">

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
        {filteredCharacter && filteredCharacter.map(data => {
          return (
            <div className="character-list" key={data.id}>
              <Container>
                <Row>

                  <Card>
                    <CardTitle>
                      {data.name}
                    </CardTitle>
                    <CardSubtitle>Status: {data.status}</CardSubtitle>

                  </Card>

                </Row>
              </Container>
            </div>
          )
        })}
      </div>
    </section>
  );
}
