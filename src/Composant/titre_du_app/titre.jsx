import 'bootstrap/dist/css/bootstrap.min.css';
import './titre.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
export const Titre=()=>{


return(


    <div>
        <div className='d-flex'>

        <FontAwesomeIcon id='iconeshop' className='p-2 mt-0.5' icon={faCartShopping} style={{color: "#ed8002",}}/> 
        <h2 className='text-black'>MonShop</h2>

        </div>
  

    </div>
)



}