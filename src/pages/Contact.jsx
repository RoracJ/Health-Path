import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <div className="background" />
    <Header />
    <main className="contact-content fade-in">
      <h1>Contact Me</h1>
      
      <p>
        Reach me at{' '}
        <a href="mailto:rory.johnson.healing.path@gmail.com" className="email-link">
          rory.johnson.healing.path@gmail.com
        </a>{' '}
        or call (916) 518-5080
      </p>

    </main>
    <Footer />
  </div>
);

export default Contact;
