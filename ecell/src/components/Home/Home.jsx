import React from 'react';
import "./Home.css"; // Make sure to include styles in your CSS file
import profile_photo from '../assets/sneha.png';
import avatar from '../assets/avtar.png';

const Home = () => {
  return (
    <div className="container">
      <div className="leftSection">
        <div className="profile">
          <img src={profile_photo} alt="profile photo" />
        </div>
        <h2 className="subtitle">Hello, Welcome to My Digital Space</h2>
        <div className="introDetails">
          <p className="detail">Name: Sneha Chaudhary</p>
          <p className="detail">Player Number: 20233274</p>
          <a
            href="https://www.linkedin.com/in/sneha-chaudhary-b85a49320"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reach Out: @Sneha
          </a>
        </div>
        <a href="https://github.com/sneha20233274" target="_blank" rel="noopener noreferrer">
          <button className="button">Visit My Projects</button>
        </a>
      </div>
      <div className="rightSection">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <img
              src={avatar}
              alt="Your Avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
