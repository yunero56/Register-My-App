import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationDropdown from './Components/LocationDropdown';
import ThaiLocationSelectForm from './Components/ThaiLocationSelectForm';

// const React  = 

function App() {

  let provinces = [
    { name: 'Bangkok', id: 1},
    { name: 'Nonthaburi', id: 2 }
  ]


  return (
    <div>
      <ThaiLocationSelectForm />
    </div>
  );
}

export default App;
