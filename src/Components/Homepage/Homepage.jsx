import React from 'react';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
  return (
    <div className="gothic-dark-container">
      <h1 className="gothic-dark-header">TOPHER</h1>
      
      <div className="gothic-links-container">
        <a href="https://www.tiktok.com/@cloudynginya?is_from_webapp=1&sender_device=pc" 
           className="gothic-link gothic-link-tiktok">
          TikTok
        </a>
        
        <a href="https://www.twitch.tv/topher000000000000" 
           className="gothic-link gothic-link-twitch">
          Twitch
        </a>
        
        <a href="https://www.youtube.com/@cloudynginya" 
           className="gothic-link gothic-link-youtube">
          YouTube
        </a>
        
        <a href="https://www.instagram.com/t00pher/" 
           className="gothic-link gothic-link-instagram">
          Instagram
        </a>
      </div>
      
      <footer className="gothic-footer">
        WELCOME TO TOPHERS WORLD
      </footer>
    </div>
  );
};

export default Homepage;