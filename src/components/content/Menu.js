import React from 'react'
import menu1 from '../../images/menu1.jpg'
import menu2 from '../../images/menu2.jpg'
import menu3 from '../../images/menu3.jpg'
import menu4 from '../../images/menu4.jpg'
import menu5 from '../../images/menu5.jpg'
import menu6 from '../../images/menu6.jpg'

function Menu() {
  return (
    <section className='menu' id='menu'>
        <div className='title'>
          <h2 className='title-text'>Our <span>M</span>enu</h2>
          <p>
            60% of businesses are not having a content marketing plan/strategy.
          </p>
        </div>

        <div className='content'>
          <div className='box'>
            <div className='imgBx'>
              <img src={menu1} alt='menu1'/ >
            </div>
            <div className='text'>
              <h3>Special Salads</h3>
            </div>
          </div>

          <div className='box'>
            <div className='imgBx'>
              <img src={menu2} alt='menu2'/ >
            </div>
            <div className='text'>
              <h3>Special Soup</h3>
            </div>
          </div>

          <div className='box'>
            <div className='imgBx'>
              <img src={menu3} alt='menu3'/ >
            </div>
            <div className='text'>
              <h3>Special Pasta</h3>
            </div>
          </div>

          <div className='box'>
            <div className='imgBx'>
              <img src={menu4} alt='menu4'/ >
            </div>
            <div className='text'>
              <h3>Special Salads</h3>
            </div>
          </div>

          <div className='box'>
            <div className='imgBx'>
              <img src={menu5} alt='menu5'/ >
            </div>
            <div className='text'>
              <h3>Special Soup</h3>
            </div>
          </div>

          <div className='box'>
            <div className='imgBx'>
              <img src={menu6} alt='menu6'/ >
            </div>
            <div className='text'>
              <h3>Special Pasta</h3>
            </div>
          </div>
        </div>
        
        <div className='title'>
          <a href="#home" className='btn'>View All</a>
        </div>
    </section>
  )
}

export default Menu
