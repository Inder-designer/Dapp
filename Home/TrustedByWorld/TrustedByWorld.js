import React from 'react'
import IMAGES from '../../public/Images'
import Image from 'next/image'
import style from './TrustedByWorld.module.css'
const TrustedByWorld = () => {
  return (
    <section className={style.section}>
    <div className='container'>
      <h1 className={`text-center ${style.heading}`}>Trusted by world-changers big and small</h1>
      <div className='row'>
        <div className='col-md-6'>
            <Image src={IMAGES.trustByWorld}/>
        </div>
        <div className='col-md-6'>
            <p className={style.quote}>
            “In just under a year, we’ve added over 100 recurring donors to our network— a 20% increase in donations.”
            </p>
<p className={style.paragraph}>
“And in spite of the COVID-19 pandemic, 2020 was our most successful year of fundraising yet.  simple, easy-to-use integrations have played an undeniable role in driving this growth. Under the hood,  control panels give our team quick day-to-day insights on donor retention and campaign performance. The control panel also makes it easy for us to get our entire team involved with donor relationships.”
</p>
<p className={style.lastParagraph}>Peter Walle ~ Communications & Operations Coordinator.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default TrustedByWorld
