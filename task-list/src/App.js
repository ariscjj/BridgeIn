import React, { useEffect, useState } from 'react';
// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

// import the component pages
import TasksPage from './components/tasks/TaskPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProfilePage from './components/profile/ProfilePage';

import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

export default function App() {
  const [user, setUser] =  useState(null);
  const[isUserUpdated, setIsUserUpdated] = useState(false); 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setIsUserUpdated(true);
    });
  },[]); 

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {
        isUserUpdated ?
          <Routes>
            <Route path='/' element={
              <RequireAuth user={user}>
                <TasksPage />
              </RequireAuth>
            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<RegisterPage />} 
              />

          </Routes>
          :
          <div className='mt-3 text-center'>
            <Spinner />
          </div>
      }
    </BrowserRouter>
  );
}







