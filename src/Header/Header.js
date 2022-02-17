import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile/Mobile'
import Web from './web/Web'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='header'>
            <div className='logo'>Shuvamkpatel</div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web />
                </div>
                <div className='mobile-menu'>
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <div className='menu-icon'>
                        <i class="fas fa-bars"></i>
                        </div>
                        
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
        
        
    )
}

export default Header
