import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout( () => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#36454f';
      showAlert('Dark mode has been enabled', 'success');
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    < >
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      
        <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/> 
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>

    </Router>     
    </>
  );
}

export default App;