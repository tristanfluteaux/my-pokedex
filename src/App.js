<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import PokeDetails from './screens/PokeDetails';
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import PokeDetails from "./screens/PokeDetails";
// import PokeList from './screens/PokeList';
// import Search from './screens/Search';
>>>>>>> f191f26 ([REFACTO] moved all stats elements from details page in new componant PokemonStats.jsx + created PokemonStats.css file corresponding)

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pokemon/:id'>
          <PokeDetails />
        </Route>
      </Switch>
=======
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/pokelist">
          <PokeList />
        </Route>
        <Route exact path ='/search'>
          <Search />
        </Route> */}
          <Route path="/pokemon/:id">
            <PokeDetails />
          </Route>
        </Switch>
>>>>>>> f191f26 ([REFACTO] moved all stats elements from details page in new componant PokemonStats.jsx + created PokemonStats.css file corresponding)
      </BrowserRouter>
    </div>
  );
}

export default App;
