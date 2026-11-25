
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <p>
        For project-related queries, send us a message.
      </p>

      <form className="contact-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Message:</label>
        <textarea
          rows="4"
          placeholder="Write your message"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
