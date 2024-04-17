
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ImangeBackgroung } from '../imagePresentation/imageBaground';
import { Slider } from '../sliderOne/sliderone';
import { Catalogue } from '../carteCatalogue/catalogue';
import { CartPremiere } from '../CarteProduit/cartepremiere';
import { BandeInfoMenu } from '../BandeMenu/bandeMenu';

import { Cartchaussure } from '../cardeProduitComplet/carteChaussure';
import { Footer } from '../footer/footer';
import { CartVhomme } from '../cardeProduitComplet/carfteVhomme';
import { BandeInfo } from '../bandeInfo/bandeInfo';
import { CartCadeau } from '../CarteCadeau/carteCadeau';
import { ProduitReduction } from '../cartebadgepersonalier/badgePersonaliser';
import { CarteAvecBadge } from '../carteAvecBadge/carteAvecBadge';
import './home.css'
import { CartProduitComplet } from '../cardeProduitComplet/carteProduitComplet';
import { TextProduit } from '../texteTopProduit/topproduit';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Titre } from '../titre_du_app/titre';
import { BareDeRecherche } from '../Bare_de_Recherche/bareDeRecherche';
import { CartTelephone } from '../cardeProduitComplet/carteTelephone';
import { CartMontre } from '../cardeProduitComplet/cartemontre';
import { CartPepiniere } from '../cardeProduitComplet/cartePepiniere';
import { CartLunette } from '../cardeProduitComplet/carteLunette';
import { CartEnfant } from '../cardeProduitComplet/carteEnfant';
export const Home=()=>{


    const list1 =    [

        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>




                    ]

    const list_broduit_badge=[
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,



    ]

    const images = [
                        'image/chaussure.png',
                        'image/shoopingBackground.jpg',
                        
                        // Add more images here
                    ];
    const list =[

        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>

                    ]
  


    return(

   
        <div>
            

        <div className='centrale'>
        
        <div  className='container mt-2'>
            <div id='hautepagemenuettitre' className='row md-12'>
        
                <div className='col-12'>
                 <Titre></Titre>
                </div>
              
             
        
            </div>
        
            
        </div>
        
        <div className='container-fluid'>
        <ImangeBackgroung></ImangeBackgroung>
        </div>
        
        <div>
         <Catalogue></Catalogue> 
        </div>
        
        <div >
        
         <TextProduit texteAaafficher="Top Des Produit"></TextProduit>
        </div>
        




        
        <div className=' container-fluid overflow-y-auto p-1 d-flex'>
        
        <CartPremiere></CartPremiere>
        
        </div  >







        <div>
        
            
                <BandeInfo text="Cadeau Special"></BandeInfo>
            
        </div>
        
        
        <div className='container'>
        
            <div id='block_carte_avec_bad' className='row'>
        
                <div className='col-4'>
                    
                <CarteAvecBadge  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide" ></CarteAvecBadge>
        
                </div> 
        
                <div id='blocksideproduit' className='col-8 overflow-y-auto p-3 d-flex'>
              
                <CartCadeau></CartCadeau>
                </div>
        
        
                
            </div>
        
        
        
        </div>



        <div className='mt-2'>
        
            <BandeInfo text="Frinks pour enfants"></BandeInfo>
        </div>
        
        <div className='mt-2 overflow-y-auto p-3 d-flex'>
        
        <CartEnfant></CartEnfant>

        
        </div>




        
        <div className='container'>
            
            <BandeInfoMenu></BandeInfoMenu>
          
        </div>
        
        
        
        <div className='container'>
        
        <Slider images={images} />
        </div>
        
        <div className='mt-2'>
        
            <BandeInfo text="Lunette de classe"></BandeInfo>
        </div>
        
        <div className='mt-2 overflow-y-auto p-3 d-flex'>
        
       <CartLunette></CartLunette>

        
        </div>
        <div className='mt-2'>
        
            <BandeInfo text="Chaussures de classe"></BandeInfo>
        </div>
        
        <div className=' mt-2 overflow-y-auto p-3 d-flex'>
        
            <Cartchaussure></Cartchaussure>
        
        </div>
        
        <div className='mt-2'>
        
            <BandeInfo text="Telephones Originals"></BandeInfo>
        </div>
        
        <div className=' mt-2 overflow-y-auto p-3 d-flex'>
        
     <CartTelephone></CartTelephone>
        
        </div>
        
        <div className='mt-2'>
        
            <BandeInfo text="Top Pepignere Piment poivron..."></BandeInfo>
        </div>

        
        <div className=' mt-2 overflow-y-auto p-3 d-flex'>
        
        <CartPepiniere></CartPepiniere>
        
        </div>
        <div className='mt-2'>
        
        <BandeInfo text="Top des montres de chick..."></BandeInfo>
    </div>
    
    <div className=' mt-2 overflow-y-auto p-3 d-flex'>
    
        <CartMontre></CartMontre>
    
    </div>
    
        
        
        
        <div>
        
            <Footer></Footer>
        </div>
        
        {/* ici c la dive de fin  */}
        </div>
        </div>








    )
}