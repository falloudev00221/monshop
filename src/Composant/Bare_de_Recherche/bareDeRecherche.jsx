
import './B_recherche.css'

import db from '../firebaseConfig/firebase.jsx'
import { doc, getDoc,collection,query, where, getDocs } from "firebase/firestore";
import { useState,useEffect } from 'react';


export const BareDeRecherche=()=>{

  const [products, setProducts] = useState([]);
  const [produitRechercher, setProduitReccher] = useState([]);

const handlesearch = ()=>{





}
  

    return(


        <div>
      <form  className="search-bar">
      <input
        type="text"
        onChange={(e) => setProduitReccher(e.target.value)}
        placeholder="Recherche..." 
      />
      <button onClick={handlesearch} className='btn btn-warning' type="submit">Rechercher</button>
        </form>

        </div>





    )
}