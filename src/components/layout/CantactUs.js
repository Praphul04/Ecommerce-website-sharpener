import React, { useState } from 'react';

import './CantactUs.css'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formError, setFormError] = useState('');
  
  async function addCantactUsHandler(contact) {
    const response = await fetch('https://react-http-76e5c-default-rtdb.firebaseio.com/contactus.json', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'contactus/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setFormError('* Please fill in all fields.');
      return;
    }

    const contact={
        Name:name,
        Email:email,
        PhoneNumber:phoneNumber
    }
    console.log(contact)
    addCantactUsHandler(contact)
    setName("");
    setEmail("");
    setPhoneNumber("");
    isFormValid=false;
    
  };

  let isFormValid = () => {
    return name.trim() !== '' && email.trim() !== '' && phoneNumber.trim() !== '';
  };

  return (
    <div>
    <h2 className='cantact'>Contact Us</h2>
    <div  className='contact-page'>
      <form className='contact-form' onSubmit={handleSubmit}>
      {formError && <p>{formError}</p>}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;