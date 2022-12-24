import Image from 'next/image'
import React from 'react'
import style from './clickOnIndustry.module.css'
import IMAGES from '../../public/Images'
const clickOnIndustry = () => {
 const data=[{
  image:IMAGES.agriculture,
  text:"Agriculture"
 },
{
  image:IMAGES.education,
  text:"Education"
},
{
  image:IMAGES.animal,
  text:"Animal"
},
{
  image:IMAGES.homeless,
  text:"Homeless"
},
{
  image:IMAGES.food,
  text:"Food"
},
{
  image:IMAGES.bloodDonation,
  text:"BloodDonation"
},
{
  image:IMAGES.nature,
  text:"Nature"
},
{
  image:IMAGES.clothes,
  text:"Clothes"
},

]
  return (
    <section className={style.section}>
      <div className='container'>
            <h1 className={style.heading}>Click on your industry</h1>
            <p className={style.paragraph}>Discover what Blocktech can do for you.</p>
            <div className='row'>
            {data.map((item,i)=>
              <div key={i} className={`col-md-3 mb-3 position-relative`}>
                <Image className={` ${style.columnStyle}`} src={item.image}/>
                <p className={style.title}>{item.text}</p>
              </div>
            )}
             
            </div>
      </div>
    </section>
  )
}

export default clickOnIndustry
