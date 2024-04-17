
import './vfemme.css'

import db from '../firebaseConfig/firebase.jsx'


import { BandeInfo } from '../bandeInfo/bandeInfo.jsx';
import { doc, getDoc,collection,query, where, getDocs } from "firebase/firestore";
import { useState,useEffect } from 'react';





export const CollectionChaussure =(even)=>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les produits depuis Firestore
        const fetchProducts = async () => {
          try {
           
            const q = query(collection(db,"chaussures"));
          

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

        <div >

     <BandeInfo text="trouvez les meilleures vetements de femme"></BandeInfo>


            <div  >

            <ul   id=''>
             {products.map(product => (
            <li id='block1' className='' key={product.id} >    
            <div  id='cardfemme' class="card mt-2">
            <img id='img_produit' src={product.photo1} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h6 id='nameProduct' className='text-black'>{product.nom}</h6>
            </div>
            <button className='btn btn-warning'>Voir ++</button>
            
            </div>

            </li>
          ))}
            </ul>
                 
      

            </div>

        
       






        </div>


    )
}