import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row } from 'reactstrap';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      //.get('https://rickandmortyapi.com/api/character/')

      .then(response => {
        setCharacter(response.data.results);
      });
  }, [character]);



  return (

    <div className="character-list">
      <Container><Row></Row></Container>
      {character.map((chars, index) => <CharacterCard
        chars={chars}
        key={index}
        name={chars.name}
        status={chars.status}
        species={chars.species}
        location={chars.location}
        image={chars.image} />
      )}
    </div>

  )
}
