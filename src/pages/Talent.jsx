// Talent.js
import React from 'react';
import { talents } from '../constants';
import { TalentCard } from '../components';

const Talent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Talents in Islamic Finance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {talents.map(talent => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>
    </div>
  );
};

export default Talent;
