import React, {useState} from 'react'
import './images.css'
import {NavLink} from 'react-router-dom'
import { viddatas } from './data/anidata'
import ReactPlayer from 'react-player'
import icon from './../assets/close.png'


function Animations() {
    const images = viddatas

    const [model, setmodel] = useState(false);
    const [tempimgSrc, settempimgSrc] = useState('');
    

    const getImg = (imgurlss) =>{
       
        settempimgSrc(imgurlss);
        setmodel(true);
    }

    return (<>
        <div className={model? "model open" : "model"}>
            
            <ReactPlayer width='80%' height='80%' url={tempimgSrc} muted={true} playing={true} loop={true}/>
            <img src={icon} alt=''onClick={()=> setmodel(false)} />
            </div>
            
        <div className='total'>
            
            <div>
            <div className='menubar'>
            <div className='links'>
                <NavLink end to='/gallery'><div className='texts'> portfolio</div> </NavLink>
                <NavLink end to='/gallery/portraits'><div className='texts'> portraits</div> </NavLink>
                <NavLink end to='/gallery/animations'><div className='texts'>animations</div> </NavLink>
            </div>
            </div>
            </div>
            
            <div className='content'>
           <div className='container' >
               {images.map(image =>{
               return (
                <div className="image-card" key={image.id}  onClick={()=>getImg(image.imgurl)} >
                    <video className='image' 
                autoPlay
                loop
                muted
                >
                    <source  src={image.imgurl} type='video/mp4'  />
                </video>
                </div>)
               })}
           </div>
           
         </div>
        </div>
        </>
    )
}

export default Animations
