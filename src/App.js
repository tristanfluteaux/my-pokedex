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
  const [loading, setLoading] = useState(true);
  const [favorites, toogleFavorite] = useFavoris();

  useEffect(() => {
    const promiseArray = [];
    const data = [];

    const getPokemon = async () => {
      return await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000");
    };

    const getPromise = async (url) => {
      return await promiseArray.push(axios.get(url));
    };

    const getPromiseArray = async (pokemonArray) => {
      return Promise.all(
        pokemonArray.map((pokemon) => getPromise(pokemon.url))
      );
    };

    getPokemon().then((res) => {
      getPromiseArray(res.data.results)
        .then(async () => {
          await Promise.all(
            promiseArray.map((promise) =>
              promise.then((res) => data.push(res.data))
            )
          );
        })
        .then(() => data.sort((a, b) => a.id - b.id))
        .then(async () => {
          promiseArray.splice(0, promiseArray.length);
          await Promise.all(data.map((data) => getPromise(data.species.url)));
        })
        .then(async () => {
          await Promise.all(
            promiseArray.map((promise) =>
              promise.then((res) => {
                data[res.data.id - 1].species = res.data;
              })
            )
          );
        })
        .then(async () => {
          promiseArray.splice(0, promiseArray.length);
          await Promise.all(
            data.map(
              (data) =>
                data.species.evolution_chain &&
                getPromise(data.species.evolution_chain.url)
            )
          );
        })
        .then(async () => {
          promiseArray.map((promise) =>
            promise.then((res) => {
              data[res.data.id - 1].species.evolution_chain = res.data;
            })
          );
        })
        .then(() => {
          setPokemon(data);
          setLoading(false);
        });
    });
  }, []);

  if (!loading) console.log(pokemon);

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
