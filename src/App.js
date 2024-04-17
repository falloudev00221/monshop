
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { InsersionProduitdalabaseDonner } from './Composant/insersionProduit/insersion';
import { Home } from './Composant/home/home';
import { CollectionChaussure } from './Composant/Screan/collection';
import { PageVfemme } from './Composant/Screan/pagevfemme';
import {  Routes, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
      <div>
  
      <Routes>
      <Route  path="/" element={<Home></Home>}></Route>
      <Route  path="/vfemmes" element={<PageVfemme></PageVfemme>}></Route>
      <Route  path="wa.me/+221775211273"></Route>
      <Route  path="/chaussures"  element={<CollectionChaussure></CollectionChaussure>}  ></Route>
    
      <Route  path="/a" element={<InsersionProduitdalabaseDonner></InsersionProduitdalabaseDonner>}></Route>

      </Routes>

       
      </div>
  );
}

export default App;
