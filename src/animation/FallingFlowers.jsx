import React from 'react';
import Particles from 'react-tsparticles';
import './Falling.css'

const FallingFlowers = () => {
  const particlesConfig = {
    particles: {
      number: {
        value: 100,
      },
      size: {
        value: 3,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
        },
      },
    },
  };

  return (
    <Particles options={particlesConfig} />
  );
};

export default FallingFlowers;
