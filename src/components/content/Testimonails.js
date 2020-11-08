import React from 'react'
import TestimonialsList from './testimonials/TestimonialsList'

function Testimonails() {
  return (
    <section className='testimonials' id='testimonials'>
      <div className='title white'>
        <h2 className='title-text'>They <span>S</span>aid About Us</h2>
        <p>60% of businesses are not having a content marketing plan/strategy.</p>      
      </div>
      <TestimonialsList />
    </section>
  )
}

export default Testimonails
