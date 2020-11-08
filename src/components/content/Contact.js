import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='title'>
        <h2 className='title-text'><span>C</span>ontact Us</h2>
        <p>60% of businesses are not having a content marketing plan/strategy.</p>
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact
