import React from 'react'
import testimonials1 from '../../../images/testi1.jpg'
import testimonials2 from '../../../images/testi2.jpg'
import testimonials3 from '../../../images/testi3.jpg'

function TestimonialsDetails() {
  return (
    <>
     <div className='content'>
        <div className='box' id='box1-testi'>
          <div className='imgBx'>
            <img src={testimonials1} alt='testimonials 1'/>
          </div>
          <div className='text'>
            <p>60% of businesses are not having a content marketing plan/strategy. 
              That means that a majority of business owners are building content 
              without a clear strategy behind. If you do not have a clear focused 
              content marketing plan you are in dangerous territory because you 
              are very likely in the risk of creating content that is not on par 
              with your brands business values. Creating a solid plan/strategy is 
              a clear necessity.</p>
            <h3>Someone Famous</h3>
          </div>
        </div>

        <div className='box' id='box2-testi'>
          <div className='imgBx'>
            <img src={testimonials2} alt='testimonials 2'/>
          </div>
          <div className='text'>
            <p>60% of businesses are not having a content marketing plan/strategy. 
              That means that a majority of business owners are building content 
              without a clear strategy behind. If you do not have a clear focused 
              content marketing plan you are in dangerous territory because you 
              are very likely in the risk of creating content that is not on par 
              with your brands business values. Creating a solid plan/strategy is 
              a clear necessity.</p>
            <h3>Someone Famous</h3>
          </div>
        </div>


        <div className='box' id='box3-testi'>
          <div className='imgBx'>
            <img src={testimonials3} alt='testimonials 3'/>
          </div>
          <div className='text'>
            <p>60% of businesses are not having a content marketing plan/strategy. 
              That means that a majority of business owners are building content 
              without a clear strategy behind. If you do not have a clear focused 
              content marketing plan you are in dangerous territory because you 
              are very likely in the risk of creating content that is not on par 
              with your brands business values. Creating a solid plan/strategy is 
              a clear necessity.</p>
            <h3>Someone Famous</h3>
          </div>
        </div>

      </div> 
    </>
  )
}

export default TestimonialsDetails
