import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gallery, Home, Login, NotFound, Profile, Register } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/gallery'
        element={<Gallery />}
      />
      <Route
        path='/profile'
        element={<Profile />}
      />
      <Route
        path='/auth/login'
        element={<Login />}
      />
      <Route
        path='/auth/register'
        element={<Register />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
