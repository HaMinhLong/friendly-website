import React from 'react'
import ExpertList from './expert/ExpertList'


function Expert() {

  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const titleTextExpert = document.getElementById('title-text-expert')
      titleTextExpert.classList.toggle('active', window.scrollY < 1800 || window.scrollY > 2800)
      const textExpert = document.getElementById('text-expert')
      textExpert.classList.toggle('active', window.scrollY < 1850 || window.scrollY > 2800)
      const box1 = document.querySelector('.box1-expert')
      box1.classList.toggle('active', window.scrollY < 2000 || window.scrollY > 3200)
      const box2 = document.querySelector('.box2-expert')
      box2.classList.toggle('active', window.scrollY < 2100 || window.scrollY > 3200)
      const box3 = document.querySelector('.box3-expert')
      box3.classList.toggle('active', window.scrollY < 2200 || window.scrollY > 3200)
      const box4 = document.querySelector('.box4-expert')
      box4.classList.toggle('active', window.scrollY < 2300 || window.scrollY > 3200)
    }
  })

  return (
    <section className='expert' id='expert'>
      <div className='title'>
        <h2 className='title-text' id='title-text-expert'>Our Kitchen <span>E</span>xpert</h2>
        <p id='text-expert'>60% of businesses are not having a content marketing plan/strategy.</p>      
      </div>
      <ExpertList />
    </section>
  )
}

export default Expert
