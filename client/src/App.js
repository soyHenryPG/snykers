import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import { AuthProvider } from "./context/authContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;