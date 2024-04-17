

import './image.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import db from '../firebaseConfig/firebase.jsx'
import { doc, getDoc,collection,query, where, getDocs } from "firebase/firestore";
import { useState,useEffect } from 'react';



export const ImangeBackgroung=()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les produits depuis Firestore
        const fetchProducts = async () => {
          try {
           
            const q = query(collection(db, "Photodusite"));

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

               



                 {products.map(product => (
               <li id='lix2' >

            <div id='contener_image' className='container-fluid'>

            <div id='Texte_dec_page_photo' className=''>
                <h2>{product.message1}</h2>
                <p>{product.message2}</p>
                <button id="btn_voir_plus"  className='btn btn-warning'>voir plus</button>

            </div>
            <img id='image'  className="img-fluid rounded"    src={product.image} alt="" />



            </div>



      
            </li>
          ))}
            </div>
        
    )
}