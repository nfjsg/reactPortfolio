import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(!!e.target.value.trim());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Basic email validation, adjust as needed
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className={!isNameValid ? 'invalid' : ''}
        />
        {!isNameValid && <p className="error-message">Name is required</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={!isEmailValid ? 'invalid' : ''}
        />
        {!isEmailValid && (
          <p className="error-message">Enter a valid email address</p>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;