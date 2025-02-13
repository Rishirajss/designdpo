import React, { useRef } from 'react'
import beddesign from '../img/Home page/bed_design.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Explorecatgory() {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  var settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5.5,
      slidesToScroll: 3.5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: true,    
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
       <div className="explore-main mb-5">
            <section className='explore-heading text-center mt-2'>
                    <span className='fs-2 fw-bold '> Explore Categories </span>
            </section>
            <div className="container mt-5">
                <div className="slider-container">
                    <div className='explore-slide-arrow'>
                        <div className='explore-backwardArrow' onClick={previous}>
                            <FontAwesomeIcon icon={faLessThan}/>
                        </div>
                        <div className='explore-forwardArrow' onClick={next}>
                            <FontAwesomeIcon icon={faGreaterThan}/>
                        </div>
                    </div>
                    <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Bed Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Wardrop Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>TV Unit Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Modular Kitchen Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Bedroom Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Bathroom Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Childrens Bedroom Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Living Room Designs</span>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <img src={beddesign} alt="" />
                            <div className='design-img-name py-2'>
                                <span className='fw-bold'>Dining Designs</span>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="explore-btn text-center mt-5">
                <button className='btn btn-primary py-3 px-5 fw-bold'>See all</button>
            </div>
       </div>
    </>
  )
}
