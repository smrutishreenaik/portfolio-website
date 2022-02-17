import React from 'react'
import './web.css'
import { NavLink} from 'react-router-dom'

function Web(){ 
    return (
        <div className='web'>
            <div className='web-option' >
                <NavLink end to='/'   >
                    Home
                </NavLink>
            </div>
            <div className='web-option'>
                <NavLink to='/gallery'  >
                    Gallery
                </NavLink>
            </div>
            <div className='web-option'>
                <NavLink  to='/About'>
                    About
                </NavLink>
            </div>
            <div className='web-option'>
                <NavLink to='/Contact'>
                    Contact
                </NavLink>
            </div>
            
        
            
        </div>
    )
}

export default Web