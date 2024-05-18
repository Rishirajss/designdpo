import React from 'react'
import '../css/Style.css'
import footerlogo from '../img/footer-logo-white.svg'
import playstore from '../img/play-store.svg'

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                                <div className="footer-logo">
                                    <img src={footerlogo} alt="" />  
                                </div>
                                <div className="download fw-bold text-white mt-3">
                                    DOWNLOAD OUR APP  
                                </div>
                                <div className="download-icon mt-2">
                                    <img src={playstore} width="140px" height="41px" alt="" /> 
                                </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="footer-menu-list">
                                    <div className="row">
                                        <div className="col text-white">
                                            <p className='fw-bold'>
                                                CATEGORY
                                            </p>
                                            <div>
                                                <p>Dining Area</p>
                                                <p>Living Room Designs</p>
                                                <p>Childrens Bedroom Designs</p>
                                                <p>Bathroom Design</p>
                                            </div>
                                        </div>  
                                        <div className="col text-white">
                                            <p className='fw-bold'>
                                                COMPANY
                                            </p>
                                            <div>
                                                <p>Blog</p>
                                                <p>About Us</p>
                                                <p>FAQ's</p>
                                                <p>Contact Us</p>
                                            </div>
                                        </div>  
                                        <div className="col text-white">
                                            <p className='fw-bold'>
                                                QUICK LINKS
                                            </p>
                                            <div>
                                                <p>Privacy Policy</p>
                                                <p>Terms and Conditions</p>
                                                <p>Refund Policy</p>
                                            </div>
                                        </div>  
                                    </div>
                            </div> 
                        </div>  
                    </div>
            </div> 
        </div>
        {/* <div className="footer-auth">
                <div className="row m-0 py-5">
                    <div className="col-9">
                        © 2024 My website. All Rights Reserved.  
                    </div>
                    <div className="col-3">
                        Design and develop by <b> clone Website </b> 
                    </div>
                </div>
        </div>  */}
    </>
  )
}
