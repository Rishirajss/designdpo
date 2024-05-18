import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCrown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className='px-5 topbackground'>
         <nav class="navbar navbar-expand-lg navbar-light bg-transprant">
             <div class="container-fluid">
                 <Link class="navbar-brand" to="#">
                     <img src={logo} alt="" height="36px" />
                 </Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <div className="menu-list">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                              <Link class="nav-link text-black fw-medium mx-3" aria-current="page" to="/">Home</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link text-black fw-medium me-3" aria-current="page" to="/About-us">About Us</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link text-black fw-medium me-3" aria-current="page" to="/Explore">Explore</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link text-black fw-medium me-3" aria-current="page" to="/Contact-Us">Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                     <div className="menu-icons ms-auto">
                        <span className='search mx-3 fs-6 '>
                           <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </span>
                        <span className="heart mx-3 fs-6">
                           <FontAwesomeIcon icon={faHeart}/>
                        </span>
                        <span className="shopping-bag mx-3 fs-6">
                            <FontAwesomeIcon icon={faBagShopping} />
                        </span>
                        <span className="crown mx-3 fs-6">
                           <FontAwesomeIcon icon={faCrown}/> 
                             Upgrade Pro
                        </span>
                        <span className="sign-in">
                              <div className="btn btn-danger fw-bold px-4 py-2">Sign In</div>
                        </span>
                     </div>
                  </div>
               </div>
         </nav>
        </div>  
    </>
  )
}
