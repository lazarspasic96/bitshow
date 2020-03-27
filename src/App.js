import React from 'react';
import './App.css';
import Footer from './components/UI/Footer/Footer';
import Header from './components/UI/Header/Header'
import Main from './Main'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (

    <>
    
      <Header />
      <Main />
      <Footer />

    </>

  )

}

export default App;
