import React from 'react';

const TalentCard = ({ talent }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <img src={talent.image} alt={talent.name} className="w-24 h-24 rounded-full mb-3" />
      <h2 className="text-lg font-bold">{talent.name}</h2>
      <p className="text-primary mb-1"><strong>{talent.expertise}</strong></p>
      <p className="text-secondary mb-2">{talent.experience}</p>
      <p className="text-gray-600 mb-4">{talent.bio.substring(0, 60)}...</p> {/* Truncate bio */}
      <a href={`mailto:${talent.contact}`} className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:from-primary-dark hover:to-secondary-dark transition-colors">Contact</a>
    </div>
  );
};

export default TalentCard;
