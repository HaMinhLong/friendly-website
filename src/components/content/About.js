import React from 'react'
import img1 from '../../images/img1.jpg'

function About() {
  return (
    <section className='about' id='about'>
      <div className='row'>
        <div className='col50'>
          <h2 className='title-text'><span>A</span>bout Us</h2>
          <p>
            60% of businesses are not having a content marketing plan/strategy. 
            That means that a majority of business owners are building content 
            without a clear strategy behind. If you do not have a clear focused 
            content marketing plan you are in dangerous territory because you 
            are very likely in the risk of creating content that is not on par 
            with your brands business values. Creating a solid plan/strategy 
            is a clear necessity.
            <br />
            <br />
            60% of businesses are not having a content marketing plan/strategy. 
            That means that a majority of business owners are building content 
            without a clear strategy behind. If you do not have a clear focused 
            content marketing plan you are in dangerous territory because you 
            are very likely in the risk of creating content that is not on par 
            with your brands business values. Creating a solid plan/strategy 
            is a clear necessity.
          </p>
        </div>

        <div className='col50'>
          <div className='imgBx'>
            <img src={img1} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
