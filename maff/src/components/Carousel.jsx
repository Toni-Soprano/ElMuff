import React, { useEffect, useRef } from 'react';
import './carousel.css';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

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
            <div className="des">azazazazazazaz</div>
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
            <div className="name">Gift Cards </div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        
      </div>

      <div className="button">
        <button className="prev"><HiArrowSmLeft/></button>
        <button className="next"><HiArrowSmRight/></button>
      </div>
    </div>
  );
};

export default Carousel;
