import React from 'react'

import './home.css'
import Lower from './lower/Lower'
import Middle from './middle/Middle'
import Upper from './upper/Upper'


function Body() {
    return (
    
        <div className='body'>
            
                <Upper/>

                <Lower/>
                
               <Middle/>
            
        </div>
        
        
        
    )
}

export default Body
