import React, { useState, useEffect } from 'react';
import { Nav } from './Nav';
import { StyleNav } from '../../styles/components/layouts/Main';

export const Header = () => {
  return (
    <StyleNav className="navbar mx-sm-1">
      <div className="mb-0 ms-5" />
      <Nav />
    </StyleNav>
  );
};
