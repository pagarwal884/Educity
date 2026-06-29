import React from 'react';
import HeroImg from '../Assets/hero.png';

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
    </div>
  );
};

export default Hero;