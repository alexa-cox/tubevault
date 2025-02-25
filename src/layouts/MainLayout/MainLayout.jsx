import React from 'react';
import Navigation from '../../components/navigation';

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
