import Image from 'next/image'
import React from 'react'
import style from './Footer.module.css'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagramSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import IMAGES from '../../public/Images'
const Footer = () => {
  return (
    <div className={style.FooterSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Image src={IMAGES.FooterLogo}/>
            <p className={style.paragraph1}>
            Build business ecosystems laced with decentralization, enhanced security and transparency with our custom blockchain app development
            </p>
            <h6 className={style.heading1}>Our Social Presence</h6>
            <div className='row'>
              <div className='col-md-2'>
                <FaFacebookF/>
              </div>
              <div className='col-md-2'>
                <FaTwitter/>
              </div>
              <div className='col-md-2'>
                <FaLinkedinIn/>
              </div>
              <div className='col-md-2'>
                <BsInstagram/>
              </div>

            </div>
          </div>
          <div className='col-md-2'>
            <h6 className={style.heading2}>Our Services</h6>
            <ul className={style.unorderedList}>
              <li className={style.list}>Metaverse</li>
              <li className={style.list}>Defi</li>
              <li className={style.list}>NFT Marketplace</li>
              <li className={style.list}>Crypto Exchange</li>
            </ul>
          </div>
          <div className='col-md-3'>
          
          <ul className={style.unorderedList2}>
              <li className={style.list}>Crypto Banking Solution</li>
              <li className={style.list}>ICO</li>
              <li className={style.list}>Wallet</li>
              <li className={style.list}>Resourses</li>
            </ul>
          </div>
          <div className='col-md-4'>
          <h6 className={style.heading3}>WhatsApp Updates</h6>
          <div className={`row ${style.row}`}>
            <div className='col-md-6'>
            <form>
                <input className={style.input} type="text" placeholder="Enter Phone No"/>
              </form>
            </div>
            <div className='col-md-6 text-end'>
             <button className={style.subscribeButton}>Subscribe</button>
            </div>
          </div>
          <p className={style.contact}>Contact Us</p>
          <div className='row'>
            <div className='col-md-6'>
          <p>example@gmail.com</p>
            </div>
            <div className='col-md-6'>
            <p>+1 654 6576 375</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
