import React from 'react'
import './about.css'
import img1 from './../assets/reviewer_one.jpg'

function About() {
    return (
        <div className='about'>
            <div className='part'>

                <div className='about-text'>
                Lori McNee is an American artist, <br/>
                author, internationally followed <br/>
                art blogger, social media influencer,<br/>
                brand ambassador, producer, and<br/>
                keynote speaker. She is a Signature<br/> 

                </div>
                <div className='about-pic'>

                <img className='about-pic-card' src={img1} alt=''/>

                </div>

            </div>
            <div className='part'>
                
                <div className='about-pic'>
                <img className='about-pic-card' src={img1} alt=''/>

                </div>
                <div className='about-text'>
                Lori McNee is an American artist,<br/>
                author, internationally followed <br/>
                art blogger, social media influencer,<br/>
                brand ambassador, producer, and<br/>
                keynote speaker. She is a Signature<br/>

                </div>

            </div>
        </div>
    )
}

export default About
