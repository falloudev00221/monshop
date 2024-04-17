
import './BandeAnnonce.css'
import { SliderTwo } from '../sildeTwo/slideTwo';
import React, { useState, useEffect } from 'react';
import { Slider } from '../sliderOne/sliderone';
import NavigationDrawer from '../navigationDrawer/navigationdrawer';
import { Menu } from '../Navigation/menu1';
export const  BandeInfoMenu=()=>{


    const images = [
        'image/chaussure.png',
        'image/shoopingBackground.jpg',
    
    ];


    const [showScrollText, setShowScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowScrollText(true);
        } else {
          setShowScrollText(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return(



        <div id="BandeAnnonce" className="container row  rounded">

        <div className="App">
      {showScrollText && (
        <div className="scroll-text"><NavigationDrawer></NavigationDrawer></div>
      )}
      {/* contenu principal ici */}
        </div>


            <Menu></Menu>
            
           

        </div>
    )
}