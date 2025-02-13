import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/Footer'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import exportimg1 from '../img/Explore images/explore_gallery_1.jpg'
import exportimg2 from '../img/Explore images/explore_gallery_2.jpg'
import exportimg3 from '../img/Explore images/explore_gallery_3.jpg'
import exportimg4 from '../img/Explore images/explore_gallery_4.jpg'
import exportimg5 from '../img/Explore images/explore_gallery_5.jpg'
import exportimg6 from '../img/Explore images/explore_gallery_6.jpg'
import exportimg7 from '../img/Explore images/explore_gallery_7.jpg'
import exportimg8 from '../img/Explore images/explore_gallery_8.jpg'
import exportimg9 from '../img/Explore images/explore_gallery_9.jpg'
import exportimg10 from '../img/Explore images/explore_gallery_10.jpg'
import exportimg11 from '../img/Explore images/explore_gallery_11.jpg'
import exportimg12 from '../img/Explore images/explore_gallery_12.jpg'
import exportimg13 from '../img/Explore images/explore_gallery_13.jpg'
import exportimg14 from '../img/Explore images/explore_gallery_14.jpg'
import exportimg15 from '../img/Explore images/explore_gallery_15.jpg'
import exportimg16 from '../img/Explore images/explore_gallery_16.jpg'
import exportimg17 from '../img/Explore images/explore_gallery_17.jpg'
import exportimg21 from '../img/Explore images/explore_gallery_21.jpg'
import exportimg25 from '../img/Explore images/explore_gallery_25.jpg'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Explore() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
       <Header/>
              <div className="container-fluid">
                  <Box sx={{ width: '100%' }}>
                  <div className="trending-menu-tabs text-center table-responsive">
                      <div className='my-0 d-lg-flex justify-content-center '>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab className='explore-tabs-name fw-semibold' label="All Design" {...a11yProps(0)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Bed Designs" {...a11yProps(1)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Wardrobe Designs" {...a11yProps(2)} />
                                <Tab className='explore-tabs-name fw-semibold' label="TV Unit Designs" {...a11yProps(3)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Modular Kitchen Designs" {...a11yProps(4)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Bedroom Designs" {...a11yProps(5)} />
                                  <Tab className='explore-tabs-name fw-semibold' label="Childrens Bedroom Designs" {...a11yProps(6)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Living Room Designs" {...a11yProps(7)} />
                                <Tab className='explore-tabs-name fw-semibold' label="Dinning Area" {...a11yProps(8)} />
                              </Tabs>
                            </Box>
                      </div>
                  </div>
                  <div className="container">
                      <CustomTabPanel value={value} index={0}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>All Designs</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg2} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg3} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg4} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg5} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg6} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg7} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg11} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg12} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Simple, Modern, and Latest Bed Designs For Bedroom</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Modern Wardrobe Designs for Your Home (Latest Ideas)</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={3}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Perfect TV Unit Designs: Modern, Simple, and Practical Designs</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={4}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Modular Kitchen Designs 2023: For Your Dream Home</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={5}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Trending Modern Bedroom Interior Design in India</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={6}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Bath Room Designs</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={7}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Children’s Bedroom Designs (Inspiring & Modern Design Ideas 2023)</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={8}>
                            <div className="row">
                                  <div className="col-12">
                                       <h2 className='py-4 fw-bold'>Best Living Room Interior Designs in India</h2>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg1} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg15} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg16} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg17} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg8} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg9} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg10} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg21} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg25} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg13} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-lg-4 col-sm-12 mb-4">
                                        <img src={exportimg14} width="100%" alt="" /> 
                                  </div>
                                  <div className="col-12">
                                        <div className='text-center py-4'>
                                            <button className='btn btn-primary explore-sign-in-btn py-3 px-5 fw-bold'> Sign in For More Options</button>
                                        </div>
                                       <p className='about-para'>
                                          Bedrooms are the finest place in your home, the room where you sleep and start your day. Your bedrooms influence your life and lifestyle. It is essential that your bedroom have the perfect interiors that suit you the best. The most important component of a bedroom is a bed. 
                                          <br />
                                          A bed is the fundamental part of any bedroom, without which the interiors feel incomplete. It is not just an interior part but is always essential for comfort and perfect sleep. Although your bed should match your standards and fit with the rest of the interiors. So in order to select the most suitable bed, you must keep a few things in mind. There are thousands of bed designs in the market today. Choosing the perfect one might become a task for you. Today you can find beds made using different raw materials like wood or metal base. At DsignDpo, we have created the best bed designs that provide comfort and style simultaneously. Explore multiple modern and unique bed designs.  
                                       </p>
                                       <div className="explore-why">
                                            <h2>
                                                  Why Choose DsignDpo to Find Modern Bed Designs?
                                            </h2>
                                            <p>
                                                  DesignDpo is a revolutionary interior design initiative by a team of expert interior designers. Our aim is to provide the most optimal and appealing interior design at your fingertips. We believe that your home interiors should always appease your standards and comfort. 
                                                        <br/>
                                                  Our interior designing app provides you with the finest bed designs and options at your ease. 
                                            </p>
                                       </div> 
                                  </div>
                            </div>
                      </CustomTabPanel>
                  </div>  
                  </Box>
              </div>
       <Footer/> 
    </>
  )
}
