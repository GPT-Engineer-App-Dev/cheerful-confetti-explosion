import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false}
      numberOfPieces={500}
      gravity={0.1}
    />
  );
};

export default ConfettiEffect;
