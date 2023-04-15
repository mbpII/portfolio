import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import 'tailwindcss/tailwind.css';

const StarsBackground = () => {
    useEffect(() => {
      const starAnimation = () => {
        // Set up the stars
        let stars = [];
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            duration: 2000 + Math.random() * 3000,
          });
        }
  
        // Animate the stars
        anime({
          targets: stars,
          duration(el) {
            return el.duration;
          },
          translateX: ['-50%', '50%'],
          translateY: ['-50%', '50%'],
          easing: 'linear',
          loop: true,
          delay: (el, i) => i * 100,
          update: function (anim) {
            const starsEl = document.querySelectorAll('.star');
            starsEl.forEach((star, index) => {
              star.style.transform = `translate(${stars[index].x}, ${stars[index].y})`;
            });
          },
        });
      };
  
      starAnimation();
    }, []);
  
    return (
      <div className="relative w-full h-full">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: '2px',
              height: '2px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default StarsBackground;
  