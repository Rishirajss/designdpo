import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobileButton } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
       <Header/>
                <div className="contact-main">
                     <div className="container">
                          <div className="mt-3">
                               <div className="row pt-5">
                                    <div className="col-lg-6 col-sm-12 mb-3 pe-5">
                                         <h2 >Contact Us</h2> 
                                         <div className="contact-number mt-4">
                                               <div className="row">
                                                    <div className="col-2">
                                                        <div className="conatact-icon">
                                                            <FontAwesomeIcon className='iconStyle'  icon={faMobileButton}/>
                                                        </div>
                                                    </div> 
                                                    <div className="col-10">
                                                        <p className='about-para mb-0 fw-medium'>
                                                            Helpline No. 
                                                        </p>   
                                                        <p className='fw-medium'>
                                                            <a href="telto:7878033508" className='text-black'>+91 7878033508</a>
                                                        </p>
                                                    </div>
                                               </div> 
                                         </div>  
                                         <div className="contact-email mt-4">
                                               <div className="row">
                                                    <div className="col-2">
                                                        <div className="conatact-icon">
                                                            <FontAwesomeIcon className='iconStyle'  icon={faEnvelope}/>
                                                        </div>
                                                    </div> 
                                                    <div className="col-10">
                                                        <p className='about-para mb-0 fw-medium'>
                                                            Email:
                                                        </p>   
                                                        <p>
                                                            <a className='fw-medium' href="mailto:info@dsigndpo.com">info@dsigndpo.com</a>
                                                        </p>
                                                    </div>
                                               </div> 
                                         </div>  
                                         <div className="contact-address mt-4">
                                               <div className="row">
                                                    <div className="col-2">
                                                        <div className="conatact-icon">
                                                            <FontAwesomeIcon className='iconStyle'  icon={faLocationDot}/>
                                                        </div>
                                                    </div> 
                                                    <div className="col-10">
                                                        <p className='about-para mb-0 fw-medium'>
                                                            Address:
                                                        </p>   
                                                        <p className='fw-medium'>
                                                            14/15, Sector 14, Chopasni Housing Board, Jodhpur, Rajasthan 342001
                                                        </p>
                                                    </div>
                                               </div> 
                                         </div>  
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mb-5">
                                        <div className="conatct-frm p-3">
                                            <div className="conatct-frm-heading">
                                                <h4 className='fw-medium'>Have a question?</h4>  
                                                <p className='fw-medium about-para'>Write to us!</p> 
                                            </div>
                                            <div className="conatct-frm-field">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="mb-4">
                                                            <div className="outlined-input">
                                                                <input type="text" name="username" id="username"/>
                                                                <label htmlFor="username">Full Name</label> 
                                                            </div>   
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="mb-4">
                                                            <div className="outlined-input">
                                                                <input type="text" name="usermail" id="usermail"/> 
                                                                <label htmlFor="usermail">Email Address</label> 
                                                            </div>    
                                                        </div>    
                                                    </div>  
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="mb-4">
                                                            <div className="outlined-input">
                                                                <input type="text" name="usernumber" id="usernumber"/> 
                                                                <label htmlFor="usernumber">Mobile Number</label> 
                                                            </div>    
                                                        </div>    
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="mb-4">
                                                            <div className="outlined-input">
                                                                <select required="" name="subject">
                                                                    <option class="visibility-hidden"></option>
                                                                    <option value="Design quote">Design quote</option>
                                                                    <option value="Payment and purchase">Payment and purchase</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                                <label htmlFor="">Subject</label> 
                                                            </div>    
                                                        </div>    
                                                    </div> 
                                                    <div className="col-12">
                                                        <div className="outlined-input">
                                                            <textarea class=" resize-none" rows="3" name="usermessage" id="usermessage"/> 
                                                            <label htmlFor="usermessage">Message</label> 
                                                        </div>    
                                                    </div> 
                                                    <div className="col-12 text-center pt-4">
                                                         <button className='btn btn-primary fw-bold py-3 px-5 contact-frm-button'>Submit</button>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>  

                                    </div>
                               </div>   
                          </div>  
                     </div>                       
                </div>
       <Footer/>  
    </>
  )
}
