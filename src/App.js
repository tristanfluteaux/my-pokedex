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
  const [loading, setLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [favorites, toogleFavorite] = useFavoris();

  useEffect(() => {
    const getPokemon = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=2000")
        .then(async (res) => {
          await setPokemonArray(res.data.results);
        });
    };
    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemonArray) {
      const promiseArray = [];
      const data = [];

      const getPromise = async (url) => {
        return await promiseArray.push(axios.get(url));
      };

      const getPromiseArray = async () => {
        return Promise.all(
          pokemonArray.map((pokemon) => getPromise(pokemon.url))
        );
      };

      getPromiseArray().then(async () => {
        await Promise.all(
          promiseArray.map((promise) =>
            promise.then((res) => data.push(res.data))
          )
        );
        setPokemonData(data);
        setLoading(false);
      });
    }
  }, [pokemonArray]);

  if (!loading) console.log(pokemonData);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {loading ? (
          <p>loading...</p>
        ) : (
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
            <Route exact path="/troll">
              <TrollEnter />
            </Route>
            <Route exact path="/trollreal">
              <Troll />
            </Route>
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
