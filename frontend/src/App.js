import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Donate from './components/donate';
import Contact from './components/contact';
import Recruiting from './components/recruiting';
import Schedule from './components/schedule';
import Faq from './components/faq';
import Roster from './components/roster';
import Footer from './components/footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Component } from 'react';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"source-sans-pro", sans-serif'
  },
  
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recruiting" element={<Recruiting />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="faq" element={<Faq />} />
        <Route path="roster" element={<Roster />} />
      </Routes>
      <Footer/>
    </div>
    </ThemeProvider>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
