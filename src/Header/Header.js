import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile/Mobile'
import Web from './web/Web'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setcolor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY>= 90){
            setcolor(true)
        } else{
            setcolor(false)
        }
    }

    window.addEventListener('scroll' , changeColor)

    return (
        <div className={color?'header header-bg' : 'header'}>
            <div className='logo'>illusByShuvam</div>
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
