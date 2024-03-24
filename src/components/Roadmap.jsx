import React from 'react';
import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/24/solid'; // for solid icons

// Roadmap component
const Roadmap = () => {
  const roadmapStages = [
    { name: 'Introduction to Islamic Finance', completed: true },
    { name: 'Principles of Shariah-Compliant Business', completed: true },
    { name: 'Islamic Financial Instruments', completed: false },
    { name: 'Advanced Islamic Financial Operations', completed: false },
    { name: 'Islamic Financial Management', completed: false },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <h1 className='text-2xl font-bold'>Your Islamic Finance Career Roadmap</h1>
      <div className="flex justify-between">
        {roadmapStages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full ${stage.completed ? 'bg-green-500' : 'bg-gray-200'} text-white flex items-center justify-center shadow-lg`}>
              {stage.completed ? (
                <CheckCircleIcon className="w-6 h-6" />
              ) : (
                <LockClosedIcon className="w-6 h-6" />
              )}
            </div>
            <div className={`text-sm md:text-base mt-2 font-medium text-center ${stage.completed ? 'text-gray-700' : 'text-gray-400'}`}>
              {stage.name}
            </div>
            {/* Dynamic connector: show only if it's not the last item */}
            {index !== roadmapStages.length - 1 && (
              <div className={`w-0 h-0 border-t-8 border-b-8 ${stage.completed ? 'border-green-500' : 'border-gray-200'} border-l-8 border-l-transparent absolute mt-1`} style={{ transform: 'rotate(45deg)', left: '50%', zIndex: -1 }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
