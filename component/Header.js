import React from 'react'
import style from './Header.module.css'
import Image from 'next/image'
import Logo from '../public/btb_logo_1_1.png.png'
import connectLogo from '../public/Vector.png'
const Header = () => {
  return (
    <div className='container'>
     <div className='row'>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='col-md-4'>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class={`nav-item ${style.list}`}>
          <a class={`nav-link ${style.link}`} aria-current="page" href="#">Create Campaign</a>
        </li>
        <li class={`nav-item ms-5 ${style.list}`}>
          <a className={`nav-link ${style.link}`} href="#">Projects</a>
        </li>
      </ul>
        </div>
        <div className='col-md-4 text-center'>
        <a class="navbar-brand" href="/"><Image src={Logo} alt="logo"/></a>
        </div>
        <div className='col-md-4 text-end'>
        <Image src={connectLogo} alt="connectlogo"/>
        </div>
    </div>
     
   
     
    </div>
 
</nav>
 </div>
</div>
  )
}

export default Header
