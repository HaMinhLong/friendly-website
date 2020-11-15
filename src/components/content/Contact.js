import React from 'react'
import ContactForm from './ContactForm'

function Contact() {


  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
  window.addEventListener('scroll', () => {
    if (width > 991) {
      const titleTextContact = document.querySelector('#title-text-contact')
      titleTextContact.classList.toggle('active', window.scrollY < 3500)
      const textContact = document.querySelector('#text-contact')
      textContact.classList.toggle('active', window.scrollY < 3500)
      const contactForm = document.querySelector('.contact-form')
      contactForm.classList.toggle('active', window.scrollY < 4000)
    }
  })

  return (
    <section className='contact' id='contact'>
      <div className='title'>
        <h2 className='title-text' id='title-text-contact'><span>C</span>ontact Us</h2>
        <p id='text-contact'>60% of businesses are not having a content marketing plan/strategy.</p>
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact
