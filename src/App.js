import React from "react";
import Header from "./components/Header.js";
import { Route, Link, NavLink } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {


  return (
    <main>
      <Header />
      <SearchForm />
      <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "black", margin: "20px" }}>Welcome</NavLink>
      <Link to="/character-list">Characters</Link>
      <Route exact path="/character-list" component={CharacterList} />
      <Route exact path="/" component={WelcomePage} />

    </main>
  );
}
