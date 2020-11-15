import React from 'react'
import img1 from '../../images/img1.jpg'

function About() {
  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const titleText = document.querySelector('#title-text-about')
      titleText.classList.toggle("active", window.scrollY < 250 || window.scrollY > 1000)
      const text = document.querySelector('.text-about')
      text.classList.toggle("active", window.scrollY < 350 || window.scrollY > 1200)
      const imgBoxAbout = document.getElementById('img-box-about')
      imgBoxAbout.classList.toggle('active', window.scrollY < 350 || window.scrollY > 1200)
    }
  })

  return (
    <section className='about' id='about'>
      <div className='row'>
        <div className='col50'>
          <h2 className='title-text' id='title-text-about'><span>A</span>bout Us</h2>
          <p className='text-about'>
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
          <div className='imgBx' id='img-box-about'>
            <img src={img1} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
