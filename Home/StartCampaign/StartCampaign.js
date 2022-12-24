import Image from 'next/image'
import React from 'react'
import style from './StartCampaign.module.css'
import IMAGES from '../../public/Images'
import {useRouter} from 'next/router'
const StartCampaign = () => {
        const router=useRouter();
  return (
    <section className={style.section}>
    <div className='container'>
     <h1 className={`text-center ${style.title}`}>Here is how easily you can start campaign</h1> 
     <Image  src={IMAGES.arrow}/>
     <h6 className={style.heading}>Starting out</h6>
     <p className={style.subTitle}>You’ve got a heart for your mission, but need help raising funds.</p>
     <div className='row d-flex align-items-center'>
        <div className='col-md-6 align-items-center'>
        <div className={`d-flex align-items-center`}>
        <div className={style.Count}>1</div>
                <h6 className={style.countText}>Create your campaign</h6>
        </div>
        <p className={style.paragraph}>Offer a highly enjoyable checkout experience for your donors.</p>
        <p className={style.paragraph1}>Simply sign up for a  account and you’ll be walked through the process of setting up a customizable donation form, donate button, or fundraising page to accept donations online!</p>
        </div>
        <div className='col-md-6'>
            <Image src={IMAGES.createCampaign}/>
        </div>
     </div>
     <div className='row d-flex align-items-center'>
     <div className='col-md-6'>
            <Image src={IMAGES.launchCampaign}/>
    </div>
        <div className='col-md-6'>
        <div className={`d-flex flex-direction-column align-items-center`}>
        <div className={style.Count}>
                        2
                </div>
                <h6 className={style.countText}>Receive your donations</h6>
        </div>
        <p className={style.paragraph}>Securely receive online donations. Automatically.</p>
        <p className={style.paragraph1}>Easily connect metamsk account to your form and accept donations directly to your bank account—then sit back and allow your optimized form to collect those much-needed funds.</p>
        </div>     
     </div>
     <div className='row d-flex align-items-center'>
        <div className='col-md-6'>
        <div className={`d-flex flex-direction-column align-items-center`}>
        <div className={style.Count}>
                        3
                </div>
                <h6 className={style.countText}>Receive your donations</h6>
        </div>
        <p className={style.paragraph}>Securely receive online donations. Automatically.</p>
        <p className={style.paragraph1}>Easily connect metamsk account to your form and accept donations directly to your bank account—then sit back and allow your optimized form to collect those much-needed funds.</p>
        </div>
        <div className='col-md-6'>
            <Image src={IMAGES.receiveCampaign}/>
        </div>
     </div>
    
     <button onClick={()=> router.push('/Create')} className={`btn ${style.Createbutton}`}>Create Campaign</button>
     </div>
    </section>
  )
}

export default StartCampaign
