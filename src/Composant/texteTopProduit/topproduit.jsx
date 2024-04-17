
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './topProduit.css'
export const TextProduit =(e)=>{



    return(



        <div id='textecartetopproduit' className='Larger shadow rounded'>

         <h6 id="TexteTopProduit" className='text-warning'>{e.texteAaafficher}</h6>

        </div>
    )
}