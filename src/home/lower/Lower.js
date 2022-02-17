import React from 'react'
import { NavLink } from 'react-router-dom'
import './lower.css'
import img0 from '../../assets/portrait.png'
import img1 from '../../assets/portfolio.png'
import img2 from '../../assets/animation.jpeg'

function Lower() {
    return (
        <div className='lower'>
            <div className='gallery-element'>
                <div className='title'>
                    Portraits
                </div>
                <div className='image-link'>
                    <NavLink to='/gallery/portraits'>
                    <img src={img0} alt='' className='pic'/>
                    </NavLink>
                </div>
            </div>

            <div className='gallery-element'>
                <div className='title'>
                    Portfolio
                </div>
                <div className='image-link'>
                    <NavLink to='/gallery'>
                    <img src={img1} alt='' className='pic'/>
                    </NavLink>
                </div>
            </div>

            <div className='gallery-element'>
                <div className='title'>
                    Animations
                </div>
                <div className='image-link'>
                    <NavLink to='/gallery/animations'>
                    <img src={img2} alt='' className='pic'/>
                    </NavLink>
                </div> 
            </div>
            
        </div>
    )
}

export default Lower
