'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Check if the user is at the top of the page
      if (scrollTop === 0) {
        setAtTop(true);
        setAtBottom(false);
        setScrollDirection('down');
      } 
      // Check if the user is at the bottom of the page
      else if (scrollTop + clientHeight >= scrollHeight - 10) {
        setAtTop(false);
        setAtBottom(true);
        setScrollDirection('up');
      } 
      // User is somewhere in between
      else {
        setAtTop(false);
        setAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (scrollDirection === 'down') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed ${atTop ? 'top-24' : 'bottom-24'} right-5 lg:right-10 z-50 cursor-pointer p-3 rounded-full bg-secondary border shadow-lg hover:cursor-pointer transition-colors duration-300`}
      style={{ transition: 'top 0.3s, bottom 0.3s' }}
    >
      {scrollDirection === 'down' ? (
        <FaArrowDown className="text-xl" />
      ) : (
        <FaArrowUp className="text-xl" />
      )}
    </div>
  );
};

export default ScrollIndicator;
