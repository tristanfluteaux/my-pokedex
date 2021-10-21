import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import PokeDetails from "./screens/PokeDetails";
import Team from "./screens/Team";
import useFavoris from "./components/useFavoris";
import Footer from "./components/Footer";

import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Troll from "./components/Troll/Troll";
import TrollEnter from "./components/Troll/TrollEnter";

function App() {
  const [pokemon, setPokemon] = useState();
  // const [pokemonData, setPokemonData] = useState();
  const [favorites, toogleFavorite] = useFavoris();

  useEffect(() => {
    const getPokemon = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=2000")
        .then((res) => setPokemon(res.data.results));
    };
    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemon) {
      console.log(
        pokemon
          .map(async (pokemon) => {
            const { data } = await axios.get(pokemon.url);
            return data;
          })
          .map((promise) => promise.then((res) => res))
      );
    }
  }, [pokemon]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home favorites={favorites} toogleFavorite={toogleFavorite} />
          </Route>
          <Route path="/pokemon/:id">
            <PokeDetails />
          </Route>
          <Route exact path="/team">
            <Team favorites={favorites} toogleFavorite={toogleFavorite} />
          </Route>
          <Route exact path='/troll'>
            <TrollEnter/>
          </Route>
          <Route exact path="/trollreal">
            <Troll/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
