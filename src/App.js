import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import PokeDetails from './screens/PokeDetails';
import PokeList from './screens/PokeList';
import Search from './screens/Search';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/pokelist">
          <PokeList />
        </Route>
        <Route exact path ='/search'>
          <Search />
        </Route>
        <Route path='/pokemon/:id'>
          <PokeDetails />
        </Route>
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
