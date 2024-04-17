
import './BandeAnnonce.css'
import { SliderTwo } from '../sildeTwo/slideTwo';
export const  BandeInfo=(even)=>{


    const images = [
        'image/chaussure.png',
        'image/shoopingBackground.jpg',
    
    ];

    return(



        <div id="BandeAnnonce" className="container row  rounded">

            <div className='barecolore'>



            <h6  id='textebande' className='text-white mt-3'>{even.text}</h6>

           

            </div>

            <SliderTwo  images={images}  ></SliderTwo>

           

        </div>
    )
}