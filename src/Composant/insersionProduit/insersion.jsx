
import { useState } from "react";
import "./inscription.css";
import { storage } from "../firebaseConfig/firebase.jsx";
import db from '../firebaseConfig/firebase.jsx'
import { getStorage, ref,uploadBytes  } from "firebase/storage";
import {  getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc,collection,query, where, getDocs,addDoc } from "firebase/firestore";



export const InsersionProduitdalabaseDonner=()=>{

    const storage = getStorage()

      
  const [collectionsaisi, setcollection] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [imgUrl1, setImgUrl1] = useState(null);
  const [imgUrl2, setImgUrl2] = useState(null);
  const [nomproduit, setnomproduit] = useState("");
  const [prixProduit, setPrixproduit] = useState("");
  const [decproduit, setdecproduit] = useState("");



const handleFileChange =(e)=>{
 
   

}



  
  const handlepublierProduit = async (e) => {
    
    e.preventDefault()
    insertion(collectionsaisi)
  };





  const insertion=(collectionname)=>{


    const q = query(collection(db,collectionname)); 

    const img1 = ref(storage,"image/"+imgUrl.name)


    uploadBytes(img1,imgUrl).then(data=>{

     

        getDownloadURL(data.ref).then(val1=>{

            // const img2 = ref(storage,"image/"+imgUrl1.name)
            
            
            addDoc(q,{

              nom:nomproduit,
              prix:prixProduit,
              description:decproduit,
              photo1:val1,
              // photo2:val2,
              // photo3:val3,
      
      
      
          }).then((docRef)=>{
      
              alert("produit ajouter")
          }).catch((error)=>{
      
              console.log(error)
          })
      

            // uploadBytes(img2,imgUrl1).then(data=>{
        
              
        
            //     getDownloadURL(data.ref).then(val2=>{
        


            //         const img3 = ref(storage,"image/"+imgUrl2.name)


            //         // uploadBytes(img3,imgUrl2).then(data=>{
                
                     
                
            //         //     getDownloadURL(data.ref).then(val3=>{
                
                         



                
            //         //     })
            //         // })
               
        
            //     })
            // })









        })
    })



 
    

  }



return(


<div>


<div className="flex items-center justify-center w-screen min-h-screen">
      <h2 className="text-white RED8PRODUCTION">RED PRODUCTION</h2>

      <form >
      <div id="blockForme" className="container bg-indigo">
        <p>inscrivez vous en tanque admin</p>
        <div>
          <div className="form-group">
            <label htmlFor="text">nom colleciton:</label>
            <input className="form-control"
              type="text"
              name="collection"
              value={collectionsaisi}
              onChange={(e) => setcollection(e.target.value)}
           
            />
          </div>
          <div className="form-group">
            <label htmlFor="nomproduit">nomproduit:</label>
            <input className="form-control"
              type="text"
              name="nomproduit"
              value={nomproduit}
              onChange={(e) => setnomproduit(e.target.value)}
           
            />
          </div>
          <div className="form-group">
            <label htmlFor="prixProduit">Prix du produit:</label>
            <input className="form-control"
              type="text"
              name="prixProduit"
              value={prixProduit}
              onChange={(e) => setPrixproduit(e.target.value)}
            
            />
          </div>

          <div className="form-group">
            <label htmlFor="decproduit">dec Produit:</label>
            <input className="form-control"
              type="text"
              name="decproduit"
              value={decproduit}
              onChange={(e) => setdecproduit(e.target.value)}
            
            />
          </div>

          
          <div className="form-group">
            
            <input className="form-control"
              type="file"
              name="file"
              onChange={(e)=>setImgUrl(e.target.files[0]
            )}
            />
          </div>
          <div className="form-group">
            
            <input className="form-control"
              type="file"
              name="file"
              onChange={(e)=>setImgUrl1(e.target.files[0]
            )}
            />
          </div>
          <div className="form-group">
            
            <input className="form-control"
              type="file"
              name="file"
              onChange={(e)=>setImgUrl2(e.target.files[0]
            )}
            />
          </div>




          <button onClick={handlepublierProduit} className="btn btn-primary" type="submit">
            S'inscrire
          </button>
       
        </div>
      </div>

      </form>
   
    
    </div>




</div>







)








}