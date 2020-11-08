import React from 'react'

function Navbar() {

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  return (
    <header>
      <a href='#home' className='logo'>Friendly Food <span>.</span></a>
      <ul className='navigation'>
        <li><a href='#banner'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#expert'>Expert</a></li>
        <li><a href='#testimonials '>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
