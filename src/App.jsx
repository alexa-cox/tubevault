import React from 'react';
import { MainLayout } from './layouts';
import AppRoutes from './routes';

const App = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

export default App;
