import React from 'react'
import benefits_first from '../img/Home page/benefits_subimage_1.jpg'
import benefits_secound from '../img/Home page/benefits_subimage_2.jpg'
import benefits_third from '../img/Home page/benefits_subimage_3.jpg'
import benefits_forth from '../img/Home page/benefits_subimage_4.png'
import benefits_fifth from '../img/Home page/benefits_subimage_5.jpg'

import benefits_icon_first from '../img/icons/benefits_subimage_icon.svg'
import benefits_icon_secound from '../img/icons/benefits_subimage_icon2.svg'
import benefits_icon_third from '../img/icons/benefits_subimage_icon_3.svg'
import benefits_icon_foruth from '../img/icons/benefits_subimage_icon_4.svg'
import benefits_icon_fifth from '../img/icons/benefits_subimage_icon_5.svg'

import benefits_box_img from '../img/Home page/box-dots.svg'

export default function Benifitespart() {
  return (
    <>
      <div className="benifites-main pb-5">
           <div className='mainHeading text-center py-5'>
                <span className='bg-white fs-lg-1 fs-3 fw-bold py-2 px-4' style={{borderRadius:'20px'}}>
                    Benifits You Get When Using 
                </span>
           </div> 
            <div className='manydesign container '>
                <div className="row">
                    <div className="col-lg col-sm-12 benefits_img_style">
                         <img src={benefits_first} alt="" />   
                    </div>
                    <div className="col-lg col-sm-12 ps-5">
                        <div className="benefits_icon mt-4 text-center text-lg-start">
                            <img src={benefits_icon_first} alt="" />
                        </div>
                        <div className="benefits_heading mt-4">
                            <h1 className='fw-bold fs-2'>
                                Many Options In All Designs
                            </h1>
                        </div>
                        <div className="benefites_btn mt-lg-5 mt-2 text-center text-lg-start">
                              <button className="btn btn-primary newBtn py-lg-3 px-lg-4 fw-bold">Explore Designs</button>  
                        </div>
                    </div>
                </div>
                <div className='benefits_box_img position-relative text-end d-none d-lg-block '>
                        <img src={benefits_box_img} alt="" />
                </div>
           </div>

            {/* This Both Div are For Same block first one is for desktop and Secoiund One is for mobile */}
                    <div className='manydesign container d-none d-lg-block'>
                            <div className="row">
                                <div className="col-lg col-sm-12 pe-5">
                                    <div className="benefits_icon mt-4 text-end">
                                        <img src={benefits_icon_secound} alt="" />
                                    </div>
                                    <div className="benefits_heading mt-4">
                                        <h1 className='fw-bold text-end' style={{fontSize:"43px"}}>
                                            High Resolution 3D Drawings
                                        </h1>
                                    </div>
                                    <div className="benefites_btn mt-5 text-end">
                                        <button className="btn btn-primary newBtn py-3 px-4 fw-bold">Know More</button>  
                                    </div>
                                </div>
                                <div className="col-lg col-sm-12 benefits_img_style">
                                    <img src={benefits_secound} alt="" />   
                                </div>
                            </div>
                            <div className='benefits_box_img1 position-relative'>
                                    <img src={benefits_box_img} alt="" />
                            </div>
                    </div>
                    <div className='manydesign container d-block d-lg-none mt-5'>
                            <div className="row">
                                <div className="col-lg col-sm-12 benefits_img_style">
                                    <img src={benefits_secound} alt="" />   
                                </div>
                                <div className="col-lg col-sm-12 ">
                                    <div className="benefits_icon mt-4 text-lg-end text-center">
                                        <img src={benefits_icon_secound} alt="" />
                                    </div>
                                    <div className="benefits_heading mt-4">
                                        <h1 className='fw-bold text-lg-end text-center fs-2'>
                                            High Resolution 3D Drawings
                                        </h1>
                                    </div>
                                    <div className="benefites_btn mt-lg-5 mt-sm-3 text-lg-end text-center">
                                        <button className="btn btn-primary newBtn py-lg-3 px-lg-4 py-sm-0 fw-bold">Know More</button>  
                                    </div>
                                </div>
                            </div>
                    </div>
            {/* This Both Div are For Same block first one is for desktop and Secoiund One is for mobile */}

           <div className='manydesign container mt-lg-1 mt-5'>
                <div className="row">
                    <div className="col-lg col-sm-12 benefits_img_style">
                         <img src={benefits_third} alt="" />   
                    </div>
                    <div className="col-lg col-sm-12 ">
                        <div className="benefits_icon mt-4 text-center text-lg-start ">
                            <img src={benefits_icon_third} alt="" />
                        </div>
                        <div className="benefits_heading mt-4">
                            <h1 className='fw-bold fs-3'>
                                2D Measurements Of Per Drawing
                            </h1>
                        </div>
                        <div className="benefites_btn mt-lg-5 mt-sm-3 text-center text-lg-start">
                              <button className="btn btn-primary newBtn py-lg-3 px-lg-4 p-sm-0 fw-bold">View More</button>  
                        </div>
                    </div>
                </div>
                <div className='benefits_box_img position-relative text-end d-none d-lg-block'>
                        <img src={benefits_box_img} alt="" />
                </div>
           </div>

           {/* This Both Div are For Same block first one is for desktop and Secoiund One is for mobile */}
                <div className='manydesign container d-none d-lg-block'>
                        <div className="row">
                            <div className="col-lg col-sm-12 pe-5">
                                <div className="benefits_icon mt-4 text-end">
                                    <img src={benefits_icon_foruth} alt="" />
                                </div>
                                <div className="benefits_heading mt-4">
                                    <h1 className='fw-bold text-end' style={{fontSize:"43px"}}>
                                        Material List For Cost Calculation Of Furniture
                                    </h1>
                                </div>
                                <div className="benefites_btn mt-5 text-end">
                                    <button className="btn btn-primary newBtn py-3 px-4 fw-bold">View More</button>  
                                </div>
                            </div>
                            <div className="col-lg col-sm-12 benefits_img_style">
                                <img src={benefits_forth} alt="" />   
                            </div>
                        </div>
                        <div className='benefits_box_img2 position-relative'>
                                <img src={benefits_box_img} alt="" />
                        </div>
                </div>
                <div className='manydesign container d-block d-lg-none mt-5'>
                        <div className="row">
                            <div className="col-lg col-sm-12 benefits_img_style">
                                <img src={benefits_forth} alt="" />   
                            </div>
                            <div className="col-lg col-sm-12">
                                <div className="benefits_icon mt-4 text-center">
                                    <img src={benefits_icon_foruth} alt="" />
                                </div>
                                <div className="benefits_heading mt-4">
                                    <h1 className='fw-bold fs-4 text-center'>
                                        Material List For Cost Calculation Of Furniture
                                    </h1>
                                </div>
                                <div className="benefites_btn mt-3 text-center">
                                    <button className="btn btn-primary newBtn fw-bold">View More</button>  
                                </div>
                            </div>
                        </div>
                </div>
           {/* This Both Div are For Same block first one is for desktop and Secoiund One is for mobile */}

           <div className='manydesign container mt-5 mt-lg-0'>
                <div className="row">
                    <div className="col-lg col-sm-12 benefits_img_style">
                         <img src={benefits_fifth} alt="" />   
                    </div>
                    <div className="col-lg col-sm-12 ps-lg-5 ps-2">
                        <div className="benefits_icon mt-4 text-center text-lg-start">
                            <img src={benefits_icon_fifth} alt="" />
                        </div>
                        <div className="benefits_heading mt-4">
                            <h1 className='fw-bold fs-3 text-center text-lg-start'>
                                Get Daily Latest Designs Updates
                            </h1>
                        </div>
                        <div className="benefites_btn mt-lg-5 mt-sm-3 text-center text-lg-start ">
                              <button className="btn btn-primary newBtn py-lg-3 px-lg-4 p-sm-0 fw-bold">View More</button>  
                        </div>
                    </div>
                </div>
                <div className='benefits_box_img position-relative text-end d-none d-lg-block'>
                        <img src={benefits_box_img} alt="" />
                </div>
           </div>
      </div>
    </>
  )
}
