import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="retro-container crt">
      <h1 className="retro-header">Topher's world Mathafaka</h1>

      <div className="retro-links">
        <a href="https://www.tiktok.com/@cloudynginya" className="retro-link">
          <span role="img" aria-label="TikTok">🎵</span> TikTok
        </a>
        <a href="https://www.twitch.tv/topher000000000000" className="retro-link">
          <span role="img" aria-label="Twitch">🎮</span> Twitch
        </a>
        <a href="https://www.youtube.com/@cloudynginya" className="retro-link">
          <span role="img" aria-label="YouTube">📺</span> YouTube
        </a>
        <a href="https://www.instagram.com/t00pher/" className="retro-link">
          <span role="img" aria-label="Instagram">📸</span> Instagram
        </a>
      </div>
      
      <footer className="retro-footer">
        <marquee behavior="scroll" direction="left">
          🚀 Under Construction | go follow go like go share go show love to your bwoy| mathafaka!!!!! | © 1999-2025
        </marquee>
      </footer>
    </div>
  );
};

export default Homepage;