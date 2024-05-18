import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../img/Slider-imgs/slider_img1.jpg'
import img2 from '../img/Slider-imgs/slider_img2.jpg'
import img3 from '../img/Slider-imgs/slider_img3.jpg'
import img4 from '../img/Slider-imgs/slider_img4.jpg'
import img5 from '../img/Slider-imgs/slider_img5.jpg'
import img6 from '../img/Slider-imgs/slider_img6.jpg'
import backarrow from '../img/arrow-left-slider.png'
import nextarrow from '../img/arrow-right-slider.png'

export default function Sliderpart() {

    let sliderRef = useRef(null);
      const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <>
        <div className="main-part">
           <div className="container">
                 <div className="row">
                      <div className="col-lg-6 col-sm-12">
                           <div className="text-center px-3">
                                <h1 className='fw-bold fs-1'>
                                    Design Your Dream Home...
                                <br />
                                <span className='fw-bold fs-1 '>
                                    At Your Fingertips
                                </span>
                                </h1> 
                           </div> 
                           <div className="explore-btn mt-lg-5 mt-sm-3 text-center">
                                <button className='btn btn-primary fw-bold text-white px-lg-4 py-lg-3 p-sm-2'>Explore More</button>
                           </div>
                      </div>  
                      <div className="col-lg-6 col-sm-12">
                           <div className="single-slider slider-styling mt-5 mt-lg-0">
                              <div className='slidearrow'>
                                          <div className='backwardArrow' onClick={previous}>
                                                <img src={backarrow} alt="" />
                                          </div>
                                          <div className='forwardArrow' onClick={next}>
                                                <img src={nextarrow} alt="" />
                                          </div>
                              </div>
                                <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                                    <div>
                                          <img src={img1} width="100%"  alt="" />  
                                    </div>
                                    <div >
                                          <img src={img2} width="100%"  alt="" />  
                                    </div>
                                    <div >
                                          <img src={img3} width="100%"  alt="" />  
                                    </div>
                                    <div >
                                          <img src={img4} width="100%"  alt="" />  
                                    </div>
                                    <div >
                                          <img src={img5} width="100%"  alt="" />  
                                    </div>
                                    <div >
                                          <img src={img6} width="100%" alt="" />  
                                    </div>
                                </Slider>
                            </div> 
                      </div>  
                 </div>   
           </div> 
        </div>
    </>
  )
}
