import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TalentCard from './TalentCard';
import { talents } from '../constants';

const TalentCardsSwipe = () => {
  const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
  const [displayCard, setDisplayCard] = useState(true);

  // Animation control for the card swiping effect
  const [props, set] = useSpring(() => ({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(0px)' }
  }));

  // When the current index changes, reset displayCard to true to ensure the next card is shown
  useEffect(() => {
    setDisplayCard(true);
    set({ opacity: 1, transform: 'translateX(0px)' }); // Reset animation for next card
  }, [currentTalentIndex, set]);

  const handleSwipe = (direction) => {
    setDisplayCard(false); // Hide card to trigger animation
    set({
      opacity: 0,
      transform: `translateX(${direction === 'left' ? '-100%' : '100%'})`,
      config: { duration: 300 }, // Adjust duration as needed
    });

    setTimeout(() => {
      // Proceed to the next card or finish
      const nextIndex = currentTalentIndex + 1;
      if (nextIndex < talents.length) {
        setCurrentTalentIndex(nextIndex);
      } else {
        // All talents have been shown, reset for a "finished" state or loop
        setCurrentTalentIndex(-1); // Indicating end of talents
      }
    }, 300); // Match timeout with animation duration
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Discover Talents</h1>

      <div className="flex">
        <button onClick={() => handleSwipe('left')} className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          ❌
        </button>
        <button onClick={() => handleSwipe('right')} className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          ✔️
        </button>
      </div>

      <div className="mt-4"></div>
      {currentTalentIndex >= 0 ? (
        displayCard && (
          <animated.div style={props}>
            <TalentCard talent={talents[currentTalentIndex]} />
          </animated.div>
        )
      ) : (
        <div className="text-xl font-semibold">No more talents to display for today.</div>
      )}
      
    </div>
  );
};

export default TalentCardsSwipe;
