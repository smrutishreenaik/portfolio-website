import React from 'react'
import './images.css'
import {NavLink} from 'react-router-dom'
import { SRLWrapper } from 'simple-react-lightbox';
import { bswkdatas } from './data/bswkdata';

const options = {
    
    buttons: {
        
        showDownloadButton: false
    }
}

function Portraits() {
    const images = bswkdatas
    return (
        <div className='total'>
            <div>
            <div className='menubar'>
            <div className='links'>
                <NavLink  end to='/gallery'><div className='texts'> portfolio</div> </NavLink>
                <NavLink end to='/gallery/portraits'><div className='texts'> portraits</div> </NavLink>
                <NavLink end to='/gallery/animations'><div className='texts'>animations</div> </NavLink>
            </div>
            </div>
            </div>
            
            <div className='content'>
            <SRLWrapper options={options}>
           <div className='container' >
               {images.map(image =>
                <div className="image-card" key={image.id} >
                    <a href={image.imgurl}>
                    <img className="image" src={image.imgurl} alt=""/>
                    </a>
                </div>
               )}
           </div>
           </SRLWrapper>
           </div>
        </div>
    )
}

export default Portraits
