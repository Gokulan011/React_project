import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactimg from '../assets/image/get_in_touch.avif'

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6p1ta0c",
        "template_26vilhe",
        form.current,
        "ERPcU9XUQeE5gVFBN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
    console.log(import.meta.env);
  };

  return (
    <div className='contact'>
      <img src={contactimg} className='contact-img' />
      <h1 className='contact-h1'>Get In Touch</h1>
      <p className='contact-p'>Reach out to us for any inquiries or feedback. <br /> We're here to assist you.</p>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <label htmlFor="" className='fname-label'>First name *</label>
        <label htmlFor="" className='lname-label'>Last name *</label> <br />
        <input type="text" name="user_fname" placeholder="Your First Name" required className='fname-input' />
        <input type="text" name="user_lname" placeholder="Your Last Name" required className='lname-input' /> <br />
        <label htmlFor="" className='email-label'>Email *</label> <br />
        <input type="email" name="user_email" placeholder="Your Email" required className='email-input' /> <br />
        <label htmlFor="" className='ans-label'>Short answer *</label> <br />
        <textarea name="message" placeholder="Your Message" required className='ans-input' />
        <button onClick={sendEmail} className='cont-sub-btn'>Submit</button>
      </form>
    </div>
  );
}












