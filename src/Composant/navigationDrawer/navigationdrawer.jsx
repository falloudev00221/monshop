import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './NavigationDrawer.css'; // Assurez-vous de créer un fichier CSS pour le style

 export const NavigationDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer1 = () => {
    setDrawerOpen(!drawerOpen);
   

  };
  const toggleDrawer2 = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleDrawer3 = () => {
    setDrawerOpen(!drawerOpen);
    navigate('/vfemmes')
  };
  const toggleDrawer4 = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="drawer-toggle-button">
        ☰ Menu
      </button>

      <div className={`navigation-drawer ${drawerOpen ? 'open' : ''}`}>
        <button onClick={toggleDrawer} className="drawer-close-button">
          &times; Close
        </button>

        <div className="menu-list">
          <a href="" onClick={toggleDrawer1}>Accueil</a>
          <a href="" onClick={toggleDrawer2}>Mode</a>
          <a href="" onClick={toggleDrawer3}>Femme</a>
          <a href="" onClick={toggleDrawer4}>Enfant</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
