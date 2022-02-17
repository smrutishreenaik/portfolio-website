import React from 'react'
import './mobile.css'

import {NavLink} from 'react-router-dom'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
            
            <i class="fas fa-times"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <NavLink end  to='/'>
                    Home
                </NavLink>
            </div>
            <div className='mobile-option'>
                <NavLink to='/gallery'>
                    Gallery
                </NavLink>
            </div>
            <div className='mobile-option'>
                <NavLink  to='/about'>
                    About
                </NavLink>
            </div>
            <div className='mobile-option'>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </div>

            </div>
            
        </div>
    )
}

export default Mobile
