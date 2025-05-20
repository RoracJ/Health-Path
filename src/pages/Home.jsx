import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="background" />
    <div className="fade-in">
      <Header />
    </div>
    <main className="home-content fade-in">
    <h1>
    Discover <Link to="/contact" className="highlight-word">your</Link> Healing Path
    </h1>

      <p>Renew your balance, peace, focus and energy.</p>

      {/* Learn More section */}
      <div className="learn-more">
        <p>To learn more:</p>
        <Link to="/about" className="learn-button">ENTER</Link>
      </div>
    </main>
    <div className="fade-in">
      <Footer />
    </div>
  </div>
);

export default Home;
