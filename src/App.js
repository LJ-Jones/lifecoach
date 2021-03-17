import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Journey from './components/Journey'
import Techniques from './components/Techniques'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Route path="/" component={Home} exact  />
      <Route path="/services" component={Services} exact  />
      <Route path="/about" component={About} exact  />
      <Route path="/journey" component={Journey} exact />
      <Route path="/techniques" component={Techniques} exact />
      <Route path="/contact" component={Contact} exact />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
