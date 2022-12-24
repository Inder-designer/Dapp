import React from 'react'
import style from './HowItWork.module.css'
import IMAGES from '../../public/Images'
import Image from 'next/image'
import {AiOutlineArrowRight} from 'react-icons/ai'
const HowItWork = () => {
  return (
    <div className={style.content}>
    <section className={style.section}>
    <div className='container text-center'>
    <h1 className={style.heading}>How it works</h1>
    <p className={style.subHeading}>You're an established nonprofit looking to take it to the next level.</p>
    <div className='row gx-0 d-flex align-items-center'>
        <div className='col-md-6'>
            <div className={`d-flex flex-direction-column align-items-center ${style.flexContainer}`}>
            <div className={style.Count}>
                        1
                </div>
                <h6 className={style.countText}>Integrate your apps</h6>
            </div>
            <p className={`text-start ${style.paragraph}`}>We're here to make transitioning to our software as smooth and seamless as possible. Start integrating your CRM, PayPal, Stripe, Google Analytics, and more.</p>
            <p className={`text-start ${style.learnMore}`}>Learn More<span className={`mx-2`}><AiOutlineArrowRight/></span></p>
        </div>
        <div className={`col-md-6 `}>
           <Image src={IMAGES.howItWork}/> 
        </div>
    </div>
    <div className={`row gx-0 gx-0 d-flex align-items-center ${style.row} `}>
          <div width={404} height={354} className={`col-md-6 `}>
           <Image src={IMAGES.manageDonor}/> 
        </div>
        <div className='col-md-6 text-start'>
            <div className={`d-flex flex-direction-column align-items-center ${style.flexContainer}`}>
            <div className={style.Count}> 2 </div>
                <h6 className={style.countText}>Manage your donors</h6>
            </div>
            <p className={`text-start ${style.paragraph}`}>
            Organize and review your donor information with ease—so you can focus on the relationships you’re building.
            </p>
            <p className={`text-start ${style.learnMore}`}>Learn More<span className={`mx-2`}><AiOutlineArrowRight/></span></p>
        </div>
    </div>
    <div className='row gx-0 gx-0 d-flex align-items-center'>
         
        <div className='col-md-6 text-start'>
            <div className={`d-flex flex-direction-column align-items-center ${style.flexContainer}`}>
                <div className={style.Count}>
                        3
                </div>
                <h6 className={style.countText}>Expand your toolkit</h6>
            </div>
            <p className={`text-start ${style.paragraph}`}>Stand out from the crowd with nearly every advanced fundraising feature on one platform. Built on a foundation of how nonprofits work & donors think.</p>
            <p className={`text-start ${style.learnMore}`}>Learn More<span className={`mx-2`}><AiOutlineArrowRight/></span></p>
        </div>
        <div width={404} height={354} className={`col-md-6 `}>
           <Image  src={IMAGES.expandToolkit}/> 
        </div>
    </div>
    <button className={`btn ${style.donateButton}`}>Start Donating</button>
    </div>
      
    </section>
    </div>
  )
}

export default HowItWork
