import React from 'react'
import trendimg from '../img/Home page/benefits_subimage_2.jpg'

export default function Trending() {
  return (
    <>
       <div className="trending-main py-5 ">
            <div className="container-fluid mb-5">
                <h2 className='text-center mt-5'> Trending More Design </h2>
                <div className="trending-menu-tabs py-md-4 py-2 pb-0 text-center table-responsive">
                    <ul className='my-0 list-unstyled d-lg-flex w-max-content'>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap  '>
                                    All Design
                            </span>
                        </li>
                       <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                Bed Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    Wardrobe Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    TV Unit Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    Modular Kitchen Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    Bedroom Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    Childrens Bedroom Designs
                            </span>
                        </li>
                        <li className='mx-md-2 mx-1 d-inline-block'>
                            <span className='trending-option d-inline-block text-nowrap'>
                                    Living Room Designs
                            </span>
                        </li> 
                    </ul>
                </div>
                <div className="trending-tabs-img mt-4">
                      <div className="row">
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" />
                               <span className='fw-bold text-white position-relative'>Childrens Bedroom Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>TV Unit Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Childrens Bedroom Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>TV Unit Designs</span>
                          </div>  

                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Childrens Bedroom Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Bedroom Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Modular Kitchen Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Childrens Bedroom Designs</span> 
                          </div>  

                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>TV Unit Designs</span>
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Wardrobe Designs</span>
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" />
                               <span className='fw-bold text-white position-relative'>Living Room Designs</span> 
                          </div>  
                          <div className="col-3 mb-4">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Bed Designs</span>
                          </div>  

                          <div className="col-3">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Bed Designs</span>
                          </div>  
                          <div className="col-3">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relative'>Bed Designs</span>
                          </div>  
                          <div className="col-3">
                               <img src={trendimg} width="100%" alt="" />
                               <span className='fw-bold text-white position-relative'>Bed Designs</span> 
                          </div>  
                          <div className="col-3">
                               <img src={trendimg} width="100%" alt="" /> 
                               <span className='fw-bold text-white position-relatives'>Bed Designs</span>
                          </div>  
                      </div>  
                </div>
            </div>
       </div>
    </>
  )
}
