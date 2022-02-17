import React from 'react'
import './footer.css'
import { SocialData } from './social'
function Footer() {
    const data=SocialData;

    return (
        
        <div className='social-contact'>
            <div className='icons' >
            {data.map((item)=>{
                return(
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className='social-icon-div'>
                        
                            <img src={item.icon} className="social-icon" alt=''/>
                        </div>
                    </a>
                )
            })}
            </div>

            <div className='credits'>
                Made by <a href='https://www.linkedin.com/in/smrutishree-naik-b771121a3/' target="_blank" rel="noopener noreferrer">Smrutishree Naik</a>
            </div>

        </div>
        
    )
}

export default Footer
