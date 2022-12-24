import React from 'react'
import style from './JoinOurMission.module.css'
const JoinOurMIssion = () => {
  return (
    <section className={style.section}>
    <div className='container'>
      <h1 className={style.heading}>Join Our Mission</h1>
      <p className={style.paragraph}>Sign up for our monthly newsletter and follow us in our mission to contribute to a more circular world by changing our approach to sustainable building.</p>
      <div className='d-flex flex-direction-row'>
        <form>
            <input type="text" className={style.input} placeholder="Name"/>
            <input className={`mx-5 ${style.input}`} type="text" placeholder="Email"/>
           <button className={`btn ${style.button}`} type="submit">Submit</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default JoinOurMIssion
