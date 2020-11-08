import React from 'react'

function ContactForm() {
  return (
    <div>
      <div className='contact-form'>
        <h3>Send Message</h3>
        <div className='inputBox'>
          <input type='text' placeholder='Your name'/>
        </div>
        <div className='inputBox'>
          <input type='text' placeholder='Your email'/>
        </div>
        <div className='inputBox'>
          <textarea placeholder='Message'></textarea>
        </div>
        <div className='inputBox'>
          <input type='submit' value='Send'/>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
