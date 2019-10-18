import React from "react";
import Header from "./components/Header.js";
import { Route, Link, NavLink } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';


export default function App() {


  return (
    <main>
      <Header />

      <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "black", margin: "20px" }}>Welcome</NavLink>
      <Link to="/character-card">Characters</Link>
      <Route exact path="/character-card" component={CharacterCard} />
      <Route exact path="/" component={WelcomePage} />

    </main>
  );
}
