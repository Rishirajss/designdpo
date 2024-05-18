import React from 'react'
import designbox_icon from '../img/Home page/box-dots-01.png'
import benefits_title from '../img/Home page/benefits_title_image.jpg'

export default function Designhome() {
  return (
    <>
        <div className="designhome-main">
            <div className="container py-5 text-center ">
                <h2 className='d-inline bg-white px-3' style={{borderRadius:"10px"}}>
                    Designs That Define You
                </h2>
                <section className='main-title-img mt-5'>
                        <img src={benefits_title} width="100%" alt="" />
                </section>
            </div>
            <section className='design-icon position-relative'>
                    <img src={designbox_icon} alt="" />
            </section>
        </div>    
    </>
  )
}
