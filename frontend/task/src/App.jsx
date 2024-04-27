// import Background from "./components/Background";
// import Foreground from "./components/Foreground";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// export default function App() {
//   return (
//     <div className="relative w-full h-screen bg-zinc-800">
      
//      <Background/>
//     <Foreground/> 


//     </div>

//   )
// }

// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Loginn from './components/Loginn';

import Register from './components/Register';
import './components/style.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Background from './components/Background';
import Foreground from './components/Foreground';


function App() {
  return (
    <Router>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background/>
        <Navbar />
        <Routes>
       
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/main" element={<Foreground />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;