import React from 'react';
import logo from './logo.svg';
import './Style/App.css';
import { HeaderComponent } from './Components/HeaderComponent';
import { NavBarComponent } from './Components/NavBarComponent';
import { ContainerComponent } from './Components/ContainerComponent';
import { SessionListComponent } from './Components/SessionListComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavBarComponent />
      <ContainerComponent />
      <SessionListComponent />
    </div>
  );
}

export default App;
