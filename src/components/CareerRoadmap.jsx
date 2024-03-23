// CareerRoadmap.js
import React from 'react';

const CareerMilestone = ({ milestone }) => (
    <div className="bg-white p-4 rounded-lg shadow mb
  -4">
        <h4 className="font-semibold">{milestone.title}</h4>
        <p className="text-sm my-2">Duration: {milestone.duration}</p>
        <div className="flex flex-wrap">
            {milestone.resources.map((resource, index) => (
                <span key={index} className="text-xs mr-2 mb-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{resource}</span>
            ))}
        </div>

    </div>
);
const CareerRoadmap = ({ careerPathSuggestion }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow mt-6">
            <h2 className="text-2xl font-semibold mb-4">Career Roadmap in Islamic Finance</h2>
            <p>{careerPathSuggestion.description}</p>
            {careerPathSuggestion.milestones.map((milestone, index) => (
                <CareerMilestone key={index} milestone={milestone} />
            ))}
        </div>
    );
};

export default CareerRoadmap;
