// TalentCard.js
import React from 'react';

const TalentCard = ({ talent }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex">
      <img src={talent.image} alt={talent.name} className="w-32 h-32 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-bold">{talent.name}</h2>
        <p className="text-gray-800"><strong>Expertise:</strong> {talent.expertise}</p>
        <p className="text-gray-800"><strong>Experience:</strong> {talent.experience}</p>
        <p className="text-gray-600">{talent.bio}</p>
        <a href={`mailto:${talent.contact}`} className="text-blue-500 hover:text-blue-600">{talent.contact}</a>
      </div>
    </div>
  );
};

export default TalentCard;
