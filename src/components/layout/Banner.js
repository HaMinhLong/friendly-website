import React from 'react'

function Banner() {
  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const title = document.querySelector('.title')
      const text = document.querySelector('.text')
      const btnScroll = document.getElementById('btn-scroll')
      title.classList.toggle('active', window.scrollY > 350)
      text.classList.toggle('active', window.scrollY > 450)
      btnScroll.classList.toggle('active', window.scrollY > 500)
    }
  })

  return (
    <section className='banner' id='banner'>
        <div className='content'>
          <h2 className='title'>Always Choose Good</h2>
          <p className='text'>
          60% of businesses are not having a content marketing plan/strategy. 
          That means that a majority of business owners are building content 
          without a clear strategy behind. If you do not have a clear focused 
          content marketing plan you are in dangerous territory because you 
          are very likely in the risk of creating content that is not on par 
          with your brands business values. Creating a solid plan/strategy 
          is a clear necessity.
          </p>
          <a href='#home' className='btn' id='btn-scroll'>Our Menu</a>
        </div>
    </section>
  )
}

export default Banner
