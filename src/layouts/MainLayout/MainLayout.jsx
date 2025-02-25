import React from 'react';
import Navigation from '../../components/Navigation';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />{' '}
      </header>
      <main children={children} />
      <footer />
    </>
  );
};

export default MainLayout;
