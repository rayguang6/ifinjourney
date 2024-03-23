// PersonalityTestResults.js
import React from 'react';

const TraitProgress = ({ label, percentage }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const PersonalityTestResults = ({ mbti, rayDalioPersonality }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-6">
      <div>
        <h3 className="text-lg font-semibold">MBTI: {mbti.type}</h3>
        <img src={mbti.image} alt="MBTI Type" className="w-24 h-24 rounded-full my-3" />
        <TraitProgress label="Introversion (I) - Extroversion (E)" percentage={mbti.traits.IE} />
        <TraitProgress label="Intuition (N) - Sensing (S)" percentage={mbti.traits.NS} />
        <TraitProgress label="Thinking (T) - Feeling (F)" percentage={mbti.traits.TF} />
        <TraitProgress label="Judging (J) - Perceiving (P)" percentage={mbti.traits.JP} />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Ray Dalio Personality: {rayDalioPersonality.type}</h3>
        <img src={rayDalioPersonality.image} alt="Ray Dalio Type" className="w-24 h-24 rounded-full my-3" />
        <ul className="space-y-1">
          {rayDalioPersonality.strengths.map((strength, index) => (
            <li key={index} className="text-sm">{strength}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalityTestResults;
