import React from 'react'
import style from './LatestStories.module.css'
import IMAGES from '../../public/Images'
import Image from 'next/image'
const LatestStories = () => {
   const cardData=[{
        image:IMAGES.latestStories1,
        content:""
    },
    {
    image:IMAGES.latestStories2,
    content:""
},
{
    image:IMAGES.latestStories3,
    content:""
},
{
    image:IMAGES.latestStories4,
    content:""
}
]
  return (
    <section className={style.section}>
      <div className='container'>
        <h1 className={style.heading}>Latest Stories</h1>
        <p className={style.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='row'>
        {cardData.map((item)=>
            <div className='col-md-3'>
            <div class={`card p-3 ${style.card}`}>
  <Image src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class={style.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> 
            </div>
        )}
         
        </div>
      </div>
    </section>
  )
}

export default LatestStories
