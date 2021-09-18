import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import PokeDetails from './screens/PokeDetails';


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
        <Route path='/pokemon/:id'>
          <PokeDetails />
        </Route>
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
