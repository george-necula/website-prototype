import React from 'react'
// import Tweet from './components/test_compenent'
import about_page from './components/about_page.jsx'
import home_page from './components/home_page'
import Navbar from './components/navbar.jsx'
import Page1dAutomata from './components/1dAutomataPage.jsx'

import './App.scss'
import { Route } from 'react-router'

function App() {
  return (
    <div id='app-top'>
      <Navbar />
      
      <Route exact path='/' component={home_page}/>
      <Route exact path='/about_page' component={about_page}/>
      <Route exact path='/1d-automata' component={Page1dAutomata}/>


      
    </div>
  );
}

export default App;
