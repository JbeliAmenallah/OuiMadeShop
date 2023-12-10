import React, { useState, useRef } from 'react';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import "../styles/ContactForm.css";
import ContactUs from '../assets/images/ContactUs.jpg'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ol8cf4y', 'template_aoeauvq', form.current, 'vJUZu2TSOQff0qx2d')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        toast.success(' Message Sent Successfully !');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={ContactUs} alt="Contact Us" />
      </div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail} ref={form}>
          <div className="input-group">
            <FiUser />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="input-group">
            <FiMail />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="input-group">
            <FiPhone />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="input-group">
            <FiMessageSquare />
            <textarea
              id="description"
              name="description"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className='buy__btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
