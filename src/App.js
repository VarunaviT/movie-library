import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Login} />
        <Route path="/home" Component={Home } />
        <Route path="/search" Component={Search} />
      
        <Route path="/signup" Component={Signup} />
      
      </Routes>
    </Router>
  );
}

export default App;
