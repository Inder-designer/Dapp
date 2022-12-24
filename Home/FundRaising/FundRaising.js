import React from 'react'
import style from './FundRaising.module.css'
import Image from 'next/image'
import Images from '../../public/Images'
const FundRaising = () => {
  const cardData=[{
    image:Images.cardImg1,
    title:"Black Girls Code",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg2,
    title:"Solar Foundation",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg3,
    title:"Skill India",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg4,
    title:"Pet Aid",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg5,
    title:"Old Age Home",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg6,
    title:"River Cleaning",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg7,
    title:"Specially Abled",
    percentage:"75%",
    raisedData:"$ 50,09,008",
    subHeading:"raised",
  },
  {
    image:Images.cardImg8,
    title:"Village Education",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  }
]
  return (
    <div className={` py-5 ${style.section}`}>
      <div className='container text-center'>
        <p className={style.heading}>Listed campaign for fundraising</p>
       <p> See why we're the fundraising engine of choice for nonprofits concerned with ease of use and higher impact.
       </p>
      <div className='row gx-0 mx-5'>
      {cardData.map((item,i)=>
        <div key={i} className={`col-lg-3  mb-5 mx-auto ${style.columstyle}`}>
        <div className="card p-3" >
  <Image src={item.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <div className={`progress ` }>
  <div className={`progress-bar w-75 ${style.progressBar}`} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className='row gx-0'>
  <div className='col-md-6'>
  <p>{item.raisedData}</p> 
  </div>
  <div className='col-md-6'>
  <p>{item.percentage}</p> 
  </div>
</div>
 <p className={`text-start ${style.raised}`}>Raised</p>
 <button className={`btn ${style.viewButton}`}>view campiagn</button>
  </div>
</div>
        </div>
      )}
      
      </div>
      <button className={style.viewAll}>View All</button>
      </div>
    </div>
  )
}

export default FundRaising
