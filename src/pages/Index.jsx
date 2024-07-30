import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ConfettiEffect from '../components/ConfettiEffect';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts for 5 seconds
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Cheerful Confetti App</h1>
        <p className="text-xl mb-8 text-white">Click the button to celebrate!</p>
        <Button 
          onClick={handleConfetti}
          className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Celebrate!
        </Button>
      </div>
      {showConfetti && <ConfettiEffect />}
    </div>
  );
};

export default Index;
