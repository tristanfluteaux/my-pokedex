import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import PokeDetails from "./screens/PokeDetails";
import Team from "./screens/Team";
import useFavoris from "./components/useFavoris";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [favorites, toogleFavorite] = useFavoris();

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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
