import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to='/'
        end
      >
        Home
      </NavLink>
      <NavLink to='/gallery'>Gallery</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/auth/login'>Login</NavLink>
      <NavLink to='/auth/register'>Register</NavLink>
    </nav>
  );
};

export default Navigation;
