import React from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import img0 from './../assets/contact.png'

const diffToast= () =>{
    toast.success("THANK YOU FOR WRITING TO US! We got your message 😍, and within 2 business days we will get back to you. Meanwhile check our other works 🙃🙂🙃🙂",{
        position: "top-center",
        autoClose: 19000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}


function sendEmail(e){

    diffToast()

    e.preventDefault()

    emailjs.sendForm('service_2kjt3ia','template_278of3d',e.target,'user_qcWMnvIdZwuhNV6wi896k').then(res=>{
        console.log(res)
    }).catch(err=> console.log(err))
}

function Contact() {
    return (
        
         <div className='contact-section'>
             <div className='contact-info'>
             <img src={img0} alt='' className='contact-image'/>
             
             </div>
             <div className='contact-form'>
                
                <form className='contact' onSubmit={sendEmail} >
                    <input type='text' name='name' className='text-box' placeholder='Your Name' required/>
                    <input type='email' name='user_email' className='text-box' placeholder='Your Email' required/>
                    <textarea name='message' rows='5'  placeholder='Your message' required/>
                    <input type='submit'  value='Send' className='send-btn' />
                    
                </form>
                

             </div>
             <ToastContainer/>

        </div>
    )
}

export default Contact
