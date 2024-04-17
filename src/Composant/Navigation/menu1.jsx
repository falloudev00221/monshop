import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './Menu.css'; // Assurez-vous d'avoir un fichier Menu.css avec les styles ci-dessous

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const gothere=()=>{

    navigate('/vfemmes')

  }

  const gothere2=()=>{

    navigate('/chaussures')

  }

  return (
    <nav className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a onClick={gothere} href="#">Femme</a></li>
        <li><a href="#">Homme</a></li>
        <li><a href="#">Enfant</a></li>
        <li><a href="#">Pépinière</a></li>
        <li><a onClick={gothere2} href="#">Chaussure</a></li>
      </ul>
    </nav>
  );
};


