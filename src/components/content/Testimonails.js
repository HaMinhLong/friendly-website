import React from 'react'
import TestimonialsList from './testimonials/TestimonialsList'

function Testimonails() {

  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const testimonials = document.querySelector('.testimonials')
      testimonials.classList.toggle('active', window.scrollY < 2600)
      const titleTextTesti = document.querySelector('#title-text-testi')
      titleTextTesti.classList.toggle('active', window.scrollY < 2600 || window.scrollY > 3400)
      const textTesti = document.querySelector('#text-testi')
      textTesti.classList.toggle('active', window.scrollY < 2600 || window.scrollY > 3400)
      const box1Testi = document.querySelector('#box1-testi')
      box1Testi.classList.toggle('active', window.scrollY < 2900 || window.scrollY > 4000)
      const box2Testi = document.querySelector('#box2-testi')
      box2Testi.classList.toggle('active', window.scrollY < 2900 || window.scrollY > 4000)
      const box3Testi = document.querySelector('#box3-testi')
      box3Testi.classList.toggle('active', window.scrollY < 2900 || window.scrollY > 4000)
    }
  })

  return (
    <section className='testimonials' id='testimonials'>
      <div className='title white'>
        <h2 className='title-text' id='title-text-testi'>They <span>S</span>aid About Us</h2>
        <p id='text-testi'>60% of businesses are not having a content marketing plan/strategy.</p>      
      </div>
      <TestimonialsList />
    </section>
  )
}

export default Testimonails
