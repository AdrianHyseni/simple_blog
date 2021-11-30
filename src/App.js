import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Cases';
import SignUp from './components/pages/Auth/SignUp';
import Footer from './components/footer/Footer';
import Login from './components/pages/Auth/Login';

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
      <Route  path ='/login'>
        <Login/>
      </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
