import React from 'react'
import FoodsDetails from './menuFoods/FoodsDetails'


function Menu() {
  return (
    <section className='menu' id='menu'>
        <div className='title'>
          <h2 className='title-text'>Our <span>M</span>enu</h2>
          <p>
            60% of businesses are not having a content marketing plan/strategy.
          </p>
        </div>
        <FoodsDetails />
        <div className='title'>
          <a href="#home" className='btn'>View All</a>
        </div>
    </section>
  )
}

export default Menu
