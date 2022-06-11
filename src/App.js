import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import About from './pages/about';
import Home from './pages';
import Services from './pages/services';
import SignUp from './pages/signup';
import Navbar from './components/Navbar/Navbar';
import Sign from './pages/sign';
import Profile from './pages/Profile';
import User_Profile from './pages/users_home'

const App= () => {
  return (
    <Router>
     <Navbar />
     <main>
       <Routes>
         <Route path='/wwp/' exact element={<Home/>} />
         <Route path='/' exact element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/sign' element={<Sign/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/User_profile' element={<User_Profile/>}/>
       </Routes>
      </main>
    </Router>
  );
}

export default App;
