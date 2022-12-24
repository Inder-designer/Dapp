import Image from 'next/image'
import React from 'react'
import DonateImage from '../../public/Rectangle 126.png'
import style from './StartDonating.module.css'
import BgImg from '../../public/Group 427319553.png'
const StartDonating = () => {
    const data=[{
        no:"231,766",
        title:"projects funded"
},
{
    no:"$4,546,256,748",
    title:"towards fund raised"
},
{
    no:"84,919,406",
    title:"pledges"
}
]
  return (
    <section className={style.banner}>
    <div className='container'>
      <div className='row gx-0 d-flex'>
        <div className='col-md-6'>
            <h1 className={style.heading}>Be the change you want to see in the world</h1>
            <p className={style.subHeading}>Crowdfunding platform built on top of Polygon blockchain.</p>
            <button className={`btn ${style.donateButton}`}>Start Donating</button>
        </div>
        <div className={`col-md-6 text-center  ${style.rightColumnbackground} `}>     
            <Image className={style.donateImage}  src={DonateImage}/>
        </div>
        <div className={`row  gx-0 d-flex align-items-center ${style.row}`}>
        {data.map((item,i)=>
            <div key={i} className='col-md-4  text-center'>
              <p className={`mb-0 ${style.rowNo}`}>{item.no}</p>
              <p className={`mb-0  ${style.rowTitle}`}>{item.title}</p>
             
              </div>
        )}    
        </div>
        <div >
      
      </div>
    </div>
    </div>
    </section>
  )
}

export default StartDonating
