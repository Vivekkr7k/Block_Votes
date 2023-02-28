
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Voting from './pages/Voting';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import AdminDashboard from './pages/Admin';

function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Login/>}/> 
      
      <Route path='/voting' element={<Voting/>}/>
     
      <Route path='/admin' element={<AdminDashboard/>}/>
      
    </Routes>
   
    
    </>
  );
}

export default App;
