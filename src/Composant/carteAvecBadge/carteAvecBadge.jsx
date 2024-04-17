
import './carteBadge.css'

import db from '../firebaseConfig/firebase.jsx'
import { doc, getDoc,collection,query, where, getDocs } from "firebase/firestore";
import { useState,useEffect } from 'react';




export const CarteAvecBadge=(even)=>{


    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les produits depuis Firestore
        const fetchProducts = async () => {
          try {
           
            const q = query(collection(db,"vip"));
          

                const querySnapshot = await getDocs(q);

                const productsData = querySnapshot.docs.map(doc => doc.data());
               
                setProducts(productsData);


                // querySnapshot.forEach((doc) => {
                // // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // });

            // const productsData = productsSnapshot.docs.map(doc => doc.data());
            // setProducts(productsData);
          } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
          }
        };
    
        fetchProducts(); // Appel de la fonction au chargement du composant
    
        // Nettoyage de l'effet
        return () => {
          // Nettoyage si nécessaire
        };
      }, []); // Utilisation d'un tableau vide pour que l'effet ne se déclenche qu'une fois
    












    return(


        <div>

      

        <ul id=''>
          {products.map(product => (
            <li key={product.id} >

    
            <div id='cardx' class="card mt-2  ">
        <img src={product.photo1} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p id='badge' className='danger'>{product.reduction}</p>
            <h6  id='nameProduct' className='text-danger'>{product.nom}</h6>
            <p id='nameProduct' className='text-black'>{product.pdec}</p>
            <h6 id='nameProduct' className='text-black'>{product.message}</h6>
            <button id='btn_voir_plus' className='btn btn-danger'>voir +</button>


        </div>
        </div  >

            
            </li>
          ))}
        </ul>





        </div>
    )


}