import React from 'react';
import logo from './logo.svg';
import './Style/App.css';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent';
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent';
import { SessionListComponent } from './Components/SessionListComponent/SessionListCompoment';

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
