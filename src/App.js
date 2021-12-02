import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
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
      <Route  path ='/About'>
        <About/>
      </Route>
      <Route  path ='/products'>
        <Blog/>
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
