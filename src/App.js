import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './components/pages/Test';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Cases';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path ='/'>
        <Home/>
      </Route>
      <Route  path ='/services'>
        <Services/>
      </Route>
      <Route  path ='/products'>
        <Product/>
      </Route>
      <Route  path ='/signup'>
        <SignUp/>
      </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
