import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';
import { Link } from 'react-router-dom'; 

<h2 className="profile-name">
  <Link to="/contact" className="name-link">Rory Johnson</Link>
</h2>


const About = () => (
  <div className="about">
    <div className="background" />
    <Header />

    <main className="about-content fade-in">
      {/* Profile image */}
      <img src="/profile.jpg" alt="Portrait of Me" className="profile-photo" />
      
      {/* Name under image */}
      <h2 className="profile-name">
  <Link to="/contact" className="name-link">Rory Johnson</Link>
</h2>

      <h1>About Healing Path</h1>
      <p>
        Dedicated to restoring balance, peace, and well-being
        through a variety of holistic practices including Reiki, Karuna Reiki©, 
        Shiatsu, Acupressure, Chigong and Reflexology. I also offer spiritual counseling, 
        training and certification in Reiki, teach Qigong and meditation, and officiate 
        marriages. With over 25 years of experience in the healing arts I am here to support 
        your journey toward health and renewal—mind, body, and spirit.
      </p>
    </main>

    <Footer />
  </div>
);

export default About;
