import React from 'react';

import profileImage from './assets/marca_jumozaga.png';
function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="profile-image-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
        
      </div><h2>Bem vindos!</h2>
      <p>A <strong>vida</strong> é muito <strong>curta </strong> para ser pequena!</p>
    </section>
  );
}

export default Hero;