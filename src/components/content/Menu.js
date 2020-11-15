import React from 'react'
import FoodsDetails from './menuFoods/FoodsDetails'


function Menu() {

  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const titleTextMenu = document.getElementById('title-text-menu')
      titleTextMenu.classList.toggle('active', window.scrollY < 700 || window.scrollY > 1600)
      const textMenu = document.getElementById('text-menu')
      textMenu.classList.toggle('active', window.scrollY < 700 || window.scrollY > 1600)
      const box1 = document.querySelector('.box1')
      box1.classList.toggle('active', window.scrollY < 1000 || window.scrollY > 2000)
      const box2 = document.querySelector('.box2')
      box2.classList.toggle('active', window.scrollY < 1000 || window.scrollY > 2000)
      const box3 = document.querySelector('.box3')
      box3.classList.toggle('active', window.scrollY < 1000 || window.scrollY > 2000)
      const box4 = document.querySelector('.box4')
      box4.classList.toggle('active', window.scrollY < 1300 || window.scrollY > 2400)
      const box5 = document.querySelector('.box5')
      box5.classList.toggle('active', window.scrollY < 1300 || window.scrollY > 2400)
      const box6 = document.querySelector('.box6')
      box6.classList.toggle('active', window.scrollY < 1300 || window.scrollY > 2400)
      const btnMenu = document.querySelector('#btn-menu')
      btnMenu.classList.toggle('active', window.scrollY < 1600 || window.scrollY > 2400)
    }
  })
  
  return (
    <section className='menu' id='menu'>
        <div className='title'>
          <h2 className='title-text' id='title-text-menu'>Our <span>M</span>enu</h2>
          <p id='text-menu'>
            60% of businesses are not having a content marketing plan/strategy.
          </p>
        </div>
        <FoodsDetails />
        <div className='title' id='btn-menu'>
          <a href="#home" className='btn'>View All</a>
        </div>
    </section>
  )
}

export default Menu
