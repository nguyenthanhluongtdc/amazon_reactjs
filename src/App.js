import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Payment from './Payment'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51Inwr1LR2vdkpfEcvozpJylw7RFV3JYh4lwpPOJDXQoj1gRbH2uJx0ALArvvLcgFflE3YDTYtHhgFGwPgnfkN1mJ00klPsxBbX");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser)

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
                <Route path="/payment">
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                  {/* Payment */}
                  
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
