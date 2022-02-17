import React from 'react'
import './upper.css'
import Video0 from './../../assets/pulkit.mp4'
import giff from './../../assets/aroow-gif.gif'
import {NavLink} from 'react-router-dom'



function Upper() {
    return (
        <div className='about'>
            
            <div className='about-top'>
            
            <div className='about-photo'>
                <video className='video-about'
                autoPlay
                loop
                muted
                >
                    <source src={Video0} type='video/mp4' />
                </video>
            </div>
            <div className='about-info'>
            I'm Shuvam,impressionistic digital artist, Animator & educator,<br/> 
             who found salvation and happiness through reinvention as a designer.<br/> 
            Potrait gives me peace and offers me a place to meditate <br/>
            on the beauty of colours and face. I feel it, while doing it.<br/> 
            Here at my site you will be offered your art in a remarkable way.<br/>
            I made it with textural layers with a little manipulation digitally. ♥️♥️ <br/><br/><br/>

            <div className='banner'>

            <div className='contact-page-link'> <NavLink to='/contact'>Wants yours click here</NavLink></div>
            <div className='arrow'>
            <img src={giff} className='video-arrow' alt=''/>
            </div>
            </div>
            
            </div>

            </div>
            
        </div>
    )
}

export default Upper
