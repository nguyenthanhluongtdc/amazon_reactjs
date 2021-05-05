import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login'

function App() {
  return (
    <div className="App">
        <Router>
            <div className="app">
              {/* Header */}
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/checkout">
                  <Header />
                  <Checkout />
                </Route>
                <Route path="/">
                  <Header />
                  {/* Home */}
                  <Home />
                </Route>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
