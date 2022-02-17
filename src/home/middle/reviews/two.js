import React from 'react'
import img1 from "../../../assets/reviewer_two.jpg"
import './review.css'

function Two() {
    return (
        <div className='testimonial'>
            
            <div >
            <img className='photo' src={img1} alt=''/>
            </div>
            <div className='text'>
            Lori McNee is an American artist, <br/>
            author, internationally followed <br/>
            art blogger, social media influencer,<br/>
             brand ambassador, producer, and<br/>
            keynote speaker. She is a Signature<br/> 

            </div>
            
        </div>
    )
}

export default Two