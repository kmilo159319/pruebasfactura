import React from 'react';
import { Header } from './Header';
import { PanelMenu } from './PanelMenu';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PanelMenu />
      {children}
    </>
  );
};
