import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import PokeDetails from "./screens/PokeDetails";
import Team from "./screens/Team";
import useFavoris from "./components/useFavoris";

import snorlax from './assets/snorlax-gif.gif'
import "./App.css";

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
                for (let i = 0; i < res.data.varieties.length; i++) {
                  const pokemonId =
                    res.data.varieties[i].pokemon.url.split("/")[6] - 1;
                  data[
                    pokemonId >= 10000 ? pokemonId - 9102 : pokemonId
                  ].species = res.data;
                }
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
          await Promise.all(
            promiseArray.map((promise) =>
              promise.then((res) => {
                let evolutionData = res.data.chain;
                if (evolutionData) {
                  data[
                    evolutionData.species.url.split("/")[6] - 1
                  ].species.evolution_chain = res.data;
                  if (evolutionData.evolves_to.length > 0) {
                    evolutionData = evolutionData.evolves_to;
                  } else evolutionData = null;
                  while (evolutionData) {
                    for (let i = 0; i < evolutionData.length; i++)
                      data[
                        evolutionData[i].species.url.split("/")[6] - 1
                      ].species.evolution_chain = res.data;
                    if (evolutionData[0].evolves_to.length > 0) {
                      evolutionData = evolutionData[0].evolves_to;
                    } else evolutionData = null;
                  }
                }
              })
            )
          );
        })
        .then(() => {
          setPokemon(data);
          setLoading(false);
        });
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {loading ? (
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center', backgroundColor:'white'}}>
            <h2 style={{fontSize: '60px', fontFamily: 'pokemonGB', paddingBottom:'30px'}}>Loading...</h2>
          <img src={snorlax} alt='snorlax gif'/>
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home
                pokemon={pokemon}
                favorites={favorites}
                toogleFavorite={toogleFavorite}
              />
            </Route>
            <Route path="/pokemon/:id">
              <PokeDetails pokemon={pokemon} />
            </Route>
            <Route exact path="/team">
              <Team
                pokemon={pokemon}
                favorites={favorites}
                toogleFavorite={toogleFavorite}
              />
            </Route>
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
