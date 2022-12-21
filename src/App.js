import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import Users from "./pages/Users";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
     <h1>Workshop API</h1>
     <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/users' element={<Users />} />
      <Route path ='/user/:id' element={<Profile />} />
      <Route path ='/admin'element={<Profile />} />
      <Route path ='/*' element={<Error />} />
     </Routes>
    </div>
  );
}

export default App;
