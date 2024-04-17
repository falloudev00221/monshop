

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faPersonDress } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'

import './carteDiv.css'
export const Catalogue=()=>{



    return(



        <div  id="carteDiv"className="Larger shadow rounded">

            <div  className='souscarte  Small shadow d-flex'>

            <FontAwesomeIcon  className='logoCar' icon={faTruckMoving} style={{color: "#f26e02",}} />  <h6 className='livraisont_texte'>Livraison ultra rapide</h6>
            
            </div>
            <div  className='souscarte  Small shadow d-flex'>

            <FontAwesomeIcon  className='logoCar' icon={faPersonDress} style={{color: "#f26e02",}} />
              <h6 className='livraisont_texte'>Mode femme</h6>
            
            </div>

            <div  className='souscarte  Small shadow d-flex'>

            <FontAwesomeIcon  className='logoCar' icon={faShirt} style={{color: "#f26e02",}} />
            <h6 className='livraisont_texte'>Chic Pour Enfant</h6>

            </div>
            <div  className='souscarte  Small shadow d-flex'>

            <FontAwesomeIcon  className='logoCar' icon={faStore} style={{color: "#f26e02",}} />
            <h6 className='livraisont_texte'>Chic Pour Homme</h6>

            </div>






           


        


          



        </div>
    )
}