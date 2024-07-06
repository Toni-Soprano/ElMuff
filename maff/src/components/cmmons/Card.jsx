// Card.js
import React from 'react';
import './card.css'; // Ensure this file exists with appropriate styles

const Card = ({ link, coverImage, titleImage, characterImage }) => (
    
  <a href={link} target="_blank" rel="noopener noreferrer" className="card">
    <div className="wrapper">
      <img src={coverImage} className="cover-image" alt="Cover" />
    </div>
    <img src={titleImage} className="title" alt="Title" />
    <img src={characterImage} className="character" alt="Character" />
  </a>
);

export default Card;
