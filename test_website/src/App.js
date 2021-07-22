import React from 'react'
// import Tweet from './components/test_compenent'
import about_page from './components/about_page.jsx'
import home_page from './components/home_page'
import Navbar from './components/navbar.jsx'
// import {}
import './App.scss'
import { Route } from 'react-router'

function App() {
  return (
    <div id='app-top'>
      <Navbar />
      
      <Route exact path='/' component={home_page}/>
      <Route exact path='/about_page' component={about_page}/>


      
    </div>
  );
}

export default App;
