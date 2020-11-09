import React from 'react'

function Navbar() {

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  const toggleMenu = () => {
    const menuToggle = document.getElementById('menu-toggle')
    const navigation = document.getElementById('navigation')
    menuToggle.classList.toggle("active")
    navigation.classList.toggle("active")
  }

  return (
    <header>
      <a href='#home' className='logo'>Friendly Food <span>.</span></a>
      <div className='menu-toggle' id='menu-toggle' onClick={toggleMenu}></div>
      <ul className='navigation' id='navigation'>
        <li><a href='#banner' onClick={toggleMenu}>Home</a></li>
        <li><a href='#about' onClick={toggleMenu}>About</a></li>
        <li><a href='#menu' onClick={toggleMenu}>Menu</a></li>
        <li><a href='#expert' onClick={toggleMenu}>Expert</a></li>
        <li><a href='#testimonials' onClick={toggleMenu}>Testimonials</a></li>
        <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
