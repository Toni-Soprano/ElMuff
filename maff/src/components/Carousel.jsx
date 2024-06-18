import React, { useEffect, useRef } from 'react';
import './carousel.css';

const Carousel = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const handleNextClick = () => {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.prepend(items[items.length - 1]);
    };

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    
    <div className="c-container">
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage: "url(./src/assets/1.jpg)" }}>
          <div className="content">
            <div className="name">Pc Games</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(./src/assets/2.jpg)" }}>
          <div className="content">
            <div className="name">Console</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(./src/assets/4.jpg)" }}>
          <div className="content">
            <div className="name">Streaming</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)" }}>
          <div className="content">
            <div className="name">Log in Now </div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        
      </div>

      <div className="button">
        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Carousel;
