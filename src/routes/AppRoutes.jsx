import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Home, Login, NotFound, Register } from '../pages';
import { CCPA, Disclaimer, DoNotSell, Privacy, Terms } from '../pages/legal';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes using MainLayout */}
      <Route element={<MainLayout />}>
        {/* Home route */}
        <Route
          index
          path='/'
          element={<Home />}
        />

        {/* Authentication routes */}
        <Route
          path='/auth/login'
          element={<Login />}
        />
        <Route
          path='/auth/register'
          element={<Register />}
        />

        {/* Legal routes */}
        <Route
          path='/privacy'
          element={<Privacy />}
        />
        <Route
          path='/terms'
          element={<Terms />}
        />
        <Route
          path='/disclaimer'
          element={<Disclaimer />}
        />
        <Route
          path='/ccpa'
          element={<CCPA />}
        />
        <Route
          path='/ccpa-do-not-sell'
          element={<DoNotSell />}
        />
      </Route>

      {/* NotFound route should be mainLayout if not logged in and Auth layout if logged in */}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
